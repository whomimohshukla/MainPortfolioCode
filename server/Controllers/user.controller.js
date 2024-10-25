const User = require("../Models/user.model");

exports.messageController = async (req, res) => {
  try {
    const { name, email, messageTitle, messageContent } = req.body;
    if (!messageTitle || !messageContent || !email || !name) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await User.findOne({
      email,
    });
    if (existingUser) {
      // Handle the case where the user already exists (e.g., send an error response)
      return res.status(400).json({ message: "Email already exists" });
    } else {
      // Proceed with the insertion if no duplicate found

      const newMessage = await User.create({
        name,
        email,
        messageTitle,
        messageContent,
      });
      res
        .status(201)
        .json({ message: "Message sent successfully", data: newMessage });
    }
  } catch (error) {
    console.error("message while creating", error);
    res.status(500).json({ message: "error while creating message " });
  }
};
