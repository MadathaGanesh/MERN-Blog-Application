import { useNavigate, useParams } from "react-router-dom";
import PostDetail from "../Components/PostDetail.jsx";
import { deletePost } from "../Services/Api.jsx";

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteHandler = async () => {
    try {
      await deletePost(id);
      navigate("/");
    } catch (error) {
      console.log("Failed to delete post ", error);
      alert("Failed to delete post");
    }
  };

  <div>
    <PostDetail />
    <div className="flex justify-normal m-1 p-4">
      <button
        onClick={deleteHandler}
        className="bg-red-500 text-white p-3 m-1 rounded-md hover:bg-red-700"
      >
        Delete Post
      </button>
    </div>
  </div>;
};

export default PostPage;
