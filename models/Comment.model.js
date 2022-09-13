const mongoose = require("mongoose");
const commentSchema = mongoose.Schema({
  UserName: String,
  text: String,
  newsId: {type: mongoose.SchemaTypes.ObjectId,},
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
