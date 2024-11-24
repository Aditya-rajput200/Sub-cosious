const jwt = require("jsonwebtoken");
const secret = process.env.jwt_SECRET;
require("dotenv").config();


// create token
module.exports.CreateToken = async (id) => {

    const token =  jwt.sign({ id  }, secret);
    
    return token;
};


// verify token
module.exports.VerifyToken = (req, res, next) => {

  let token = req.headers.authorization 
              ? req.headers.authorization.split(" ")[1] // Extract Bearer token
              : req.body.token || req.query.token;

  // Check if token exists 
  if (!token) {
      return res.status(401).json({ message: "You are not authorized to access this route. Token missing." });
  }

  try {
      // Verify the token
      const decoded = jwt.verify(token, secret);
      req.user = decoded.id;
      next(); 
  } catch (error) {
      return res.status(401).json({ message: error.message || "Invalid or expired token" });
  }
};
