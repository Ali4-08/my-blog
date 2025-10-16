import { Link } from "react-router-dom";
import usePostStores from "../store/usePostStors";

export default function BlogCard({ post }) {
  const { setLikes } = usePostStores();

  const wordCount = post.body.split("").length;
  const readTime = Math.ceil(wordCount / 100);

  return (
    <div className="overflow-auto bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 rounded-md shadow-md p-4 mb-2 border border-gray-300">
      <Link to={`/posts/${post.id}`}>
        <div className="space-y-2">
          <h2 className="text-lg font-medium">{post.title}</h2>
          <p className="">{post.body.slice(0, 50)} ....</p>
        </div>
      </Link>

      <div className="mt-6 flex items-center justify-between">
        <p>زمان مطالعه: {readTime} دقیقه</p>
        <span
          className="text-lg cursor-pointer select-none translate hover:scale-110 transition"
          onClick={() => setLikes(post.id)}
        >
          {post.likes} ❤️
        </span>
      </div>
    </div>
  );
}
