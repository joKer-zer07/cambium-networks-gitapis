const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String },
  name: { type: String },
  imageUrl: { type: String },
  profUrl: { type: String },
  followers: { type: Number },
  following: { type: Number },
  noOfRepos: { type: Number },
  memberSince: { type: String },
});

module.exports = mongoose.model("User", userSchema);
