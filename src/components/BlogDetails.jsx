import { useParams } from "react-router-dom";
import usePostStores from "../store/usePostStors.js";
import { useNavigate } from "react-router-dom";

export default function BlogDetails() {
  const navigate = useNavigate();

  const { id } = useParams();
  const { posts, setLikes } = usePostStores();

  const post = posts.find((p) => p.id === Number(id));

  const wordCount = post.body.split("").length;
  const readTime = Math.ceil(wordCount / 100);

  if (!post)
    return (
      <p className="font-medium text-sm text-center animate-pulse">
        اطلاعاتی برای نمایش یافت نشد ❌
      </p>
    );

  return (
    <div className="overflow-auto bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 rounded-md shadow-md p-4 mb-2 border border-gray-300">
     
      <div className="space-y-2">
        <h2 className="text-lg font-medium">{post.title}</h2>
        <p>{post.body}</p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        
        <p>زمان مطالعه: {readTime} دقیقه</p>
        <span
          className="text-lg cursor-pointer select-none translate hover:scale-110 transition"
          onClick={() => setLikes(post.id)}
        >
          {post.likes} ❤️
        </span>

      </div>

      <button className="bg-gray-400 hover:bg-gray-500 rounded-md px-4 py-2 text-white mt-2 transition"
      onClick={() => navigate("/")}>
        بازگشت
      </button>
    </div>
  );
}
