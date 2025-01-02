const jwt = require("jsonwebtoken");
const secret = process.env.jwt_SECRET;

require("dotenv").config();

// create token
module.exports.CreateToken = async (id) => {
  const token = jwt.sign(id , secret, { expiresIn: "1h" });

  return token;
};

// verify token
module.exports.isAuthenticate = async(req, res, next) =>{
   try {
    const token = req.cookies.authToken ;

 
    // check the token 
    if(!token){
        return res.status(401).json({
            message: "Unauthorised Please check the token"
        })
    
    }
   
   const decode= await jwt.verify(token,secret)


   if (!decode){
    return res.status(500).json("Failed to decode the token")
   }
   
   req.user = decode;


   
   next()
   } catch (error) {
    res.status(400).json("Failed to veiry the user ")
    
   }

}
