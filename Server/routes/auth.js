const express = require("express");
const auth_router = express.Router();
const { CreateUser, LoginUser, IsLogedIn, Logout } = require("../controlers/auth");



auth_router.post("/createUser", CreateUser)
auth_router.post("/loginUser",LoginUser)
auth_router.get("/logout",Logout)

module.exports = auth_router;