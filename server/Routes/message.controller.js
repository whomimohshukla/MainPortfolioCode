import { messageController } from "../Controllers/user.controller";

const express = require("express");
const router = express.Router();

// Send a message
router.post("/message", messageController);

module.exports = router;
