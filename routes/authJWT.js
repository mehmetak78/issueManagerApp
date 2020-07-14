const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const db = require("../MYSQL_DB/mysql");

const keys = require("../config/keys");
const requireLogin = require("./requireLogin");
const {check, validationResult} = require("express-validator");

let response = {
    returnCode: -1,
    returnMessage: null,
    errors: null,
    user: null,
    token: null
};

const jwtSignIn = (user) => {
    try {
        const payload = {
            user: {
                id: user.id,
                username: user.username,
                name: user.name
            }
        };
        const token = jwt.sign(payload, keys.jwtSecret, {expiresIn: 360000});
        if (token) {
            response = {
                returnCode: 0,
                returnMessage: "jwt sign successfull",
                user: {id: user.id, username: user.username, name:user.name},
                token
            };
        }
        else {
            response = {
                returnCode: -1,
                returnMessage : "jwt sign error",
                user: null,
                token: null
            };
        }
        return response;
    }
    catch(err) {
        response = {
            returnCode : -1,
            returnMessage : err.message,
            errors: null,
            user: null,
            token: null
        };
        return response;
    }
};

router.post("/register",
    [
        check("username", "Please include a valid username")
            .not().isEmpty(),
        check("password", "Please enter a password with 6 or more characters")
            .isLength({min: 3})
    ],
    async (req,res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            response = {
                returnCode : -1,
                returnMessage : "Invalid Parameters",
                errors: errors.array(),
                user: null,
                token: null
            };
            return res.status(401).json(response);
        }
        const {name,username, password} = req.body;
        try {
            db.findByColumn("USER","username",username, async (user)=> {
                if (user !== undefined) {
                    response = {
                        returnCode : -1,
                        returnMessage : "User Already Exists",
                        errors: [{msg: err.sqlMessage}],
                        user,
                        token: null
                    };
                    res.status(401).json(response);
                }
                else {
                    let user = {
                        name,
                        username,
                        password
                    };
                    const salt = await bcrypt.genSalt(10);
                    user.password = await bcrypt.hash(password, salt);
                    db.insertDB("USER",{...user, name}, (row) => {
                        response = jwtSignIn(user);
                        if (response.user) {
                        return res.json(response);
                    }
                else {
                        return res.status(401).json(response);
                    }
                    });
                }
            });
        } catch (err) {
            response = {
                returnCode : -1,
                returnMessage : err.message,
                errors: null,
                user: null,
                token: null
            };
            res.status(401).json(response);
        }
    });

router.post("/login",
    [
        check("username", "Please include a valid username")
            .not().isEmpty(),
        check("password", "Please enter a password with 3 or more characters")
            .isLength({min: 3})
    ],
    async (req,res) => {
        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            response = {
                returnCode : -1,
                returnMessage : "Invalid Parameters",
                errors: errors.array(),
                user: null,
                token: null
            };
            return res.status(401).json(response);
        }
        const {username, password} = req.body;
        try {
            db.findByColumn("USER","username",username, async (user,err) => {
                if (err) {
                    response = {
                        returnCode : -1,
                        returnMessage : "Server Error",
                        errors: [{msg: err.sqlMessage}],
                        user: null,
                        token: null
                    };
                    console.log(err);
                    return res.status(401).json(response);
                }
                if (user === undefined || user === null) {
                    response = {
                        returnCode : -1,
                        returnMessage : "Invalid Credentials",
                        errors: [{msg: err.sqlMessage}],
                        user: null,
                        token: null
                    };
                    return res.status(401).json(response);
                }
                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    response = {
                        returnCode : -1,
                        returnMessage : "Invalid Credentials",
                        errors: null,
                        user,
                        token: null
                    };
                    return res.status(401).json(response);
                }
                response = jwtSignIn(user);
                if (response.user) {
                    return res.json(response);
                }
                else {
                    return res.status(401).json(response);
                }
            });

        } catch (err) {
            response = {
                returnCode : -1,
                returnMessage : err.message,
                errors: null,
                user: null,
                token: null
            };
            res.status(401).json(response);
        }
    });

router.get("/getuser", requireLogin, async (req, res) => {
    try {
        db.findByColumn("USER","username",req.user.username, (user) => {
            const response = {
                returnCode: -1,
                returnMessage: "jwt getuser successfull",
                user: {id:user.id, name: user.name, username:user.username},
                token: null
            };
            res.json(response);
        });

    }
    catch(err) {
        console.log(err.message);
        response = {
            returnCode : -1,
            returnMessage : err.message,
            errors: null,
            user: null,
            token: null
        };
        res.status(500).send(response);
    }
});

module.exports = router;
