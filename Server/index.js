const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const user_router = require("./routes/user");
const auth_router = require("./routes/auth");

const port = process.env.PORT;
require("dotenv").config();

app.use(
  cors({
    origin: "http://localhost:3000", // Your frontend URL
    credentials: true, // Allow cookies to be sent/received
  })
);

app.use(express.json());
app.use(cookieParser());

// valadating the auth 
app.get()

// auth user
app.use("/api/v1/auth", auth_router);
//user
app.use("/api/v1/user", user_router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
