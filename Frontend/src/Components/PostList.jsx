import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../Services/Api.jsx";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <div className="container mx-auto mt-6 ">
      <h2 className="text-2xl font-bold ">Blog posts</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li
              key={post._id}
              className="bg-white p-4 mb-4 rounded-md shadow-sm"
            >
              <Link to={`/posts/$post._id`}>
                <h3 className="font-semibold text-xl">{post.title}</h3>
                <p className="text-gray-800 p-2">
                  {post.content.subString(1, 100)}...
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostList;
