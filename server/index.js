const express = require("express");
const app = express();
const db = require("./config/db");
const { messageController } = require("./Controllers/user.controller");
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const allowedOrigins = {
  development: "http://localhost:5173", // Frontend origin in development
  production: "https://whomimohshukla001.vercel.app/", // Frontend origin in production
};

// Dynamically set origin based on the environment
app.use(
  cors({
    origin: (origin, callback) => {
      const env = process.env.NODE_ENV || "development";
      const allowedOrigin = allowedOrigins[env];

      if (allowedOrigin === origin || !origin) {
        // Allow requests from the specified origin in the allowedOrigins object
        callback(null, true);
      } else {
        // Block other origins
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

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
