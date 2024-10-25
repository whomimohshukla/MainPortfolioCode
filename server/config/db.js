const mongoose = require("mongoose");

require("dotenv").config();

exports.connectDb = () => {
  mongoose
    .connect(process.env.MONGO_DB_URL)
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.error(err));
};
