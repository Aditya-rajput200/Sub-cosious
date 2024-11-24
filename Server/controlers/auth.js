// Create a user 
const prisma = require("../lib/prisma");
const { CreateToken } = require("../middleware/auth");


exports.CreateUser = async(req, res) =>{
    const {name,email, password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({message: "Please fill all the fields"})
    }

    try {

        const user = await prisma.user.create({
            data:{
                name,
                email,
                password
            }
        })

        return res.status(201).json(user)
        
    } catch (error) {
        
    }

}



// Login a user 

exports.LoginUser = async(req, res) =>{
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({message: "Please fill all the fields"})
    }
    try {
        const user = await prisma.user.findUnique({
            where:{
                email
            }
        })
      if(user.password != password) {
          return res.status(401).json({message: "Invalid Credentials"})
      }
      else{ 
        const token = await CreateToken(
            {
                id: user.id
            }
        )
          return res.status(200).json( token)
      }    
    
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}