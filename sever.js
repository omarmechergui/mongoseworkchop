const express = require('express');
const config = require('./confuguration/config');
const userrouter = require('./router/users');
const app = express();
const port = 5000;
config();
app.use(express.json());
app.use("/",userrouter)
app.listen(port,console.log("server is ranning"))
