const express = require("express");
const keys = require("./config/keys");

const app = express();
app.use(express.json({extended:false}));

app.use("/guest", require("./routes/guest"));



const PORT = process.env.PORT || keys.port;
app.listen(PORT, () => console.log(`Server Started on Port: ${PORT}`));

