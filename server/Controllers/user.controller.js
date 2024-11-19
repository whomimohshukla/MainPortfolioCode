const nodemailer = require("nodemailer");
const mailSender = require("../Utls/mailsender");

exports.messageController = async (req, res) => {
  try {
    const { name, email, messageTitle, messageContent } = req.body;

    if (!name || !email || !messageTitle || !messageContent) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const recipientEmail = process.env.RECIPIENT_EMAIL;
    if (!recipientEmail) {
      return res
        .status(500)
        .json({ message: "Recipient email not configured." });
    }

    const messageData = { name, email, messageTitle, messageContent };

    await mailSender(
      recipientEmail,
      "New Message from Portfolio Contact Form",
      messageData
    );

    res.status(201).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Error while processing message:", error);
    res
      .status(500)
      .json({ message: "An error occurred while processing your request." });
  }
};
