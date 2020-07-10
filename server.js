const express = require("express");
const keys = require("./config/keys");
const db = require("./MYSQL_DB/mysql");
const cookieSession = require("cookie-session");
const requireLogin = require("./routes/requireLogin");

const app = express();
app.use(express.json({extended:false}));
db.connectDB();

app.use("/guest", require("./routes/guest"));

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,  //30 days
        keys: [keys.cookieKey]
    })
);

if (keys.jwtSecret) {
    app.use("/authjwt", require("./routes/authJWT"));
}
app.use("/admin", requireLogin, require("./routes/admin"));

const PORT = process.env.PORT || keys.port;
app.listen(PORT, () => console.log(`Server Started on Port: ${PORT}`));

