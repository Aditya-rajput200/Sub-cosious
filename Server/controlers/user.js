// user can create the  

const prisma = require("../lib/prisma");


//create brain
exports.createContent = async (req, res) => {
  const { title, type, tagIds, link, description, subtitle } = req.body;

  // Validate required fields
  if (!title || !type || !link) {
    return res.status(400).json({ message: "Please fill all the required fields." });
  }

  try {
    // Validate that `req.user` contains a valid ID
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized: User ID is missing." });
    }

   
    const tagsToArr = Array.isArray(tagIds) ? tagIds : [];

    // Create new content and associate it with the user
    const newContent = await prisma.content.create({
      data: {
        title,
        type,
        tags: {
          connect: tagsToArr.map((id) => ({ id })), // Safely map only if tagIds is valid
        },
        link,
        description: description || null,
        subtitle: subtitle || null,
        user: {
          connect: {
            id: req.user.id, // Assuming req.user contains the user's ID
          },
        },
      },
    });

    return res.status(201).json(newContent);
  } catch (error) {
    // Error handling
    console.error("Error creating content:", error);
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// create tags by user

exports.createTag = async(req, res) => {
  const { name ,isDefined} = req.body; 
  // Check if the name field is provided
  if (!name) {
      return res.status(400).json({ message: "Please fill all the fields" });
  }

  try {
      // Create a new tag in the database
      const newTag = await prisma.tags.create({
          data: {
              name,
              isPredefined:isDefined ||  false, 
              user: isDefined ? undefined : { connect: { id: req.user.id } },
          },
      });

      // Send the created tag as the response
      return res.status(201).json(newTag);

  } catch (error) {
      console.error("Error creating tag:", error); // Log the error for debugging
      return res.status(500).json({ message: "An error occurred", error: error.message });
  }
};


// get all tags
exports.getAllTags = async (req, res) => {
  try {
    // const preDefinedTags = await prisma.tags.findMany({
    //   where:{
    //     isPredefined: true
    //   }
    // })
    //  res.status(200).json(preDefinedTags)

     const userDefinedTags = await prisma.tags.findMany({
      where:{
        userId: req.user.id
      }
    })
    return res.status(200).json(userDefinedTags)
    
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

// fetch all brian

exports.fetchAllContent = async (req, res) => {
    const userId = req.user.id; 
    console.log(userId);
  
    try {
      const allContent = await prisma.content.findMany({
        where: {
          userId: userId, // Direct comparison with the `userId` field
        },
      });
  
      if (allContent) {
        res.status(200).json({
          success: true,
          data: allContent,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "No content found for the given user.",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch content.",
      });
    }
  };
  

// delete brain

exports.deleteContent = async (req, res) =>{
    const {id} = req.params;
    try {
        const deletedContent = await prisma.content.delete({
            where:{
                id
            }
        })
        res.status(200).json(deletedContent)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

 