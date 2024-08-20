// Defines the API routes for managing blog application

const express = require("express");
const {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletepost,
} = require("../Controllers/postContollers");

const router = express.Router();

router.route("/posts").get(getPosts).post(createPost);
router.route("/posts/:id").get(getPostById).put(updatePost).delete(deletepost);

module.exports = router;
