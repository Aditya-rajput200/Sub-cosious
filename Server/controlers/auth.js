const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); // For password hashing
const prisma = require("../lib/prisma");
const { CreateToken,  } = require("../middleware/auth");
const secret = process.env.jwt_SECRET;

// Create a user
exports.CreateUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }

  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.LoginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare hashed passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = await CreateToken({ id: user.id });


    // stroing in cokkies

    res 
      .status(200)
      .cookie("authToken",token, {
        maxAge: 3600000,
        httpOnly: true,
        //secure: true   only work in production whare https is going on but not in http of localhost
        sameSite: "Lax",
        secure: false,
      })
      .json({
        success:true,
        message: "User loged in succesfully",
        token

      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// logout functionality

module.exports.Logout = async (req,res) =>{
  try {
    res.status(200).cookie("authToken"," ", {
      maxAge:0
    }).json({
      success: true,
      message: "User logout !!"
    })
    
  } catch (error) {

    res.status(500).json({
      success: false,
      message:"User logout is failed"
    })
    
  }
}