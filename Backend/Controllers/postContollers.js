// Here we will write the controller logic for the blog application
// Contains the logic for handling CRUD operations for blog posts.

const post = require("../Models/Post");

//Get all posts
// @route GET/posts
const getPosts = async (req, res) => {
  try {
    const posts = await post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a post by ID
//@route Get/Post/:id
const getPostById = async (req, res) => {
  try {
    const post = await post.findById(req.params.id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Create a new post
//@route POST/posts
const createPost = async (req, res) => {
  const { title, content, author } = req.body;
  if (!title || !content || !author) {
    res.status(400).json({ message: "please peovide all required fields" });
    return;
  }

  const post = new post({
    title,
    content,
    author,
  });
  try {
    const createdPost = await post.save();
    res.status(201).json(createdPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update a post
//@route PUT /posts:id
const updatePost = async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const post = await post.findById(req.params.id);
    if (post) {
      post.title = title || post.title;
      post.content = content || post.content;
      post.author = author || post.author;
      const updatedPost = await post.save();
      res.json(updatedPost);
    } else {
      res.status(404).json({ message: "post not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete a post
// @route Delete /post/:id
const deletepost = async (req, res) => {
  try {
    const post = await post.findById(req.params.id);
    if (post) {
      await post.remove();
      res.json({ message: "post removed" });
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletepost,
};
