const { Router } = require("express");
const { commentController } = require("../controllers/comments.controller");

const router = Router();
router.get("/comments/id", commentController.getComment);
router.get("/comments", commentController.getCommmentAll);
router.post("/comments", commentController.postComment);
router.delete("/comments/:id", commentController.deleteComment);

module.exports = router;
