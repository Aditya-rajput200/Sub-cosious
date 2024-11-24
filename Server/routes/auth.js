const express = require("express");
const auth_router = express.Router();
const { CreateUser, LoginUser } = require("../controlers/auth");



auth_router.post("/createUser", CreateUser)
auth_router.post("/loginUser",LoginUser)

module.exports = auth_router;