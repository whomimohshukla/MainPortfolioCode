const nodemailer = require("nodemailer");

const mailSender = async (to, subject, messageData) => {
  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Example: 'smtp.gmail.com'
      port: process.env.SMTP_PORT, // Example: 587
      secure: false, // Use true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your email address
        pass: process.env.SMTP_PASS, // Your email password or app-specific password
      },
    });

    // Compose the email
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`, // Sender address
      to, // Recipient address
      subject, // Email subject
      html: `
        <h3>New Message from Portfolio</h3>
        <p><strong>Name:</strong> ${messageData.name}</p>
        <p><strong>Email:</strong> ${messageData.email}</p>
        <p><strong>Message Title:</strong> ${messageData.messageTitle}</p>
        <p><strong>Message:</strong> ${messageData.messageContent}</p>
      `, // Email content (HTML format)
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email.");
  }
};

module.exports = mailSender;
