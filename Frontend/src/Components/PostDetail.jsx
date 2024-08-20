import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deletePost, getPostByID } from "../Services/Api.jsx";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await getPostByID(id);
      setPost(data);
    };
    fetchPost();
  }, [id]);

  const deleteHandler = async () => {
    await deletePost(id);
    navigate("/");
  };

  return (
    <div className="container mx-auto mt-7">
      <h2 className="text-2xl font-bold ">{post.title}</h2>
      <p className="text-gray-700">{post.content}</p>
      <p className="text-gray-700">Author:{post.author}</p>

      <button
        className="p-4 mt-4 bg-red-700 hover:bg-red-800 rounded-md text-white"
        onClick={deleteHandler}
      >
        Delete post
      </button>
    </div>
  );
};

export default PostDetail;
