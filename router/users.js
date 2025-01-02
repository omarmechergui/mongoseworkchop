const express = require("express");
const { createUser , deleteuser, updateuser, getoneuser} = require("../controller/users");
const userrouter = express.Router();
userrouter.post('/add',createUser);
userrouter.delete("/delete/:id",deleteuser);
userrouter.put('/update/:id',updateuser);
userrouter.get('/uppone/:id',getoneuser)

module.exports=userrouter;