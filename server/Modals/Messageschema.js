const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  room: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },

    
})
module.exports = mongoose.model('Message',MessageSchema)