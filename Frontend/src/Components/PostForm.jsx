import { useState } from "react";
import { createPost } from "../Services/Api.jsx";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = { title, content, author };
    try {
      await createPost(newPost);
      navigate("/");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="container mx-auto m-1 p-3">
      <form onSubmit={submitHandler}>
        <h2 className="text-2xl font-semibold mb-3">Create a New Post</h2>
        <div className="m-3">
          <label htmlFor="Title" className="block text-gray-800 mb-2">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Enter Title"
            className="w-full p-3 border-gray-400 rounded-sm "
            required
          />
        </div>

        <div className="m-2">
          <label htmlFor="content" className="block text-gray-800">
            Content
          </label>
          <textarea
            id="content"
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            required
            placeholder="Enter content"
            className="w-full p-3 border-gray-400 rounded-sm"
          />
        </div>

        <div className="m-3">
          <label htmlFor="author">Author</label>
          <input
            id="author"
            type="text"
            required
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            placeholder="Enter Author name"
            className="w-full rounded-sm p-3 border-gray-400 "
          />
        </div>

        <button
          type="submit"
          className="bg-blue-400 text-white p-2 rounded hover:bg-blue-700"
        >
          Create post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
