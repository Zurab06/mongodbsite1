const Comment = require("../models/Comment.model");

module.exports.commentController = {
  postComment(req, res) {
    const { userName, text, newsId } = req.body;
    Comment.create({
      userName,
      text,
      newsId,
    }).then(() => res.json("comment created"));
  },
  getComment(req, res) {
    Comment.find({}).then(() => res.json(""));
  },
  deleteComment(req, res) {
    Comment.findByIdAndDelete(req.params.id);
  },
  getCommmentAll(req, res) {
    Comment.find({}).then((data) => res.json(data));
  },
};
