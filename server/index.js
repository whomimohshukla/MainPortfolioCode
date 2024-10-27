const express = require("express");
const app = express();
const db = require("./config/db");
const { messageController } = require("./Controllers/user.controller");
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   })
// );

const allowedOrigins = {
  development: "http://localhost:5173", // Local development URL
  production: "https://whomimohshukla001.vercel.app", // Replace with your actual Vercel domain
};

// Determine the environment and set the appropriate origin
const env = process.env.NODE_ENV || "development";
const allowedOrigin = allowedOrigins[env];

// Use the correct CORS configuration
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // Allows cookies and authorization headers across origins
  })
);

// Routes and middleware
app.use(express.json());
app.post("/api/v1/message", (req, res) => {
  res.send({ message: "Message received" });
});



// res.cookie("cookieName", "cookieValue", {
//   sameSite: "None",
//   secure: true, // Vercel automatically provides HTTPS
// });

// Mock API endpoints

app.listen(port, () => console.log(`Server is running on port ${port}`));

// Mock API endpoint to fetch data from a database
db.connectDb();

// connect to the route
// app.use("/api/user", require("./routes/user.routes"));
app.use("/api/v1", messageController);

app.get("/", (req, res) => {
  res.send("Welcome ");
});
