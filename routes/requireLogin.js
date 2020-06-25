const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

module.exports = (req, res, next) => {
    if (keys.authJWT) {
        const token = req.header(keys.tokenName);
        if (token) {
            try {
                const decoded = jwt.verify(token, keys.jwtSecret);
                req.user = decoded.user;
                return next();
            }
            catch (err) {
                const response = {
                    message: err ? err.message : "Invalid token",
                    user: null,
                    token: null
                };
                return res.status(401).json(response);
            }
        }
        else {
            const response = {
                message: "Token not found",
                user: null,
                token: null
            };
            return res.status(401).json(response)
        }
    }

    const response = {
        message: "Authenitcation Method is not selected",
        user: null,
        token: null
    };
    return res.status(401).json(response)
};
