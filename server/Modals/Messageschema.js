const mongoose = require("mongoose");
const Chatschema = require("./Chatschema");

const MessageSchema = new mongoose.Schema({
  
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content: { type: String, require: true },
  timestamp: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Message", MessageSchema);
