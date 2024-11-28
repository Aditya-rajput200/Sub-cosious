const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const user_router = require("./routes/user");
const auth_router = require("./routes/auth");

require('dotenv').config();

app.use(cors());
app.use(express.json());

// auth user
app.use("/api/v1/auth",auth_router);



//user 
app.use("/api/v1/user",user_router );




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});  