const express = require("express");
const { createContent, createTag, fetchAllContent, deleteContent, getAllTags, extractData } = require("../controlers/user");
const { isAuthenticate } = require("../middleware/auth");

const user_router = express.Router();


user_router.post("/createContent",isAuthenticate, createContent)
user_router.post("/createTag",isAuthenticate,createTag)
user_router.get("/getTag",isAuthenticate,getAllTags)
user_router.get("/fetchAllContent",isAuthenticate,fetchAllContent)
user_router.delete("/deleteContent/:id",isAuthenticate,deleteContent)
user_router.post("/extract-data",extractData)





 module.exports = user_router;   