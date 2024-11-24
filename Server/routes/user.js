const express = require("express");
const { createContent, createTag, fetchAllContent, deleteContent, getAllTags } = require("../controlers/user");
const { VerifyToken } = require("../middleware/auth");
const user_router = express.Router();


user_router.post("/createContent", VerifyToken, createContent)
user_router.post("/createTag",VerifyToken,createTag)
user_router.get("/getTag",VerifyToken,getAllTags)
user_router.get("/fetchAllContent",VerifyToken,fetchAllContent)
user_router.delete("/deleteContent/:id",VerifyToken,deleteContent)



 module.exports = user_router;   