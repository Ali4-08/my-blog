import BlogCard from "../components/BlogCard";
import usePostStores from "../store/usePostStors";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
export default function BlogList() {
  const { posts, setPosts, isLoading, setIsLoading, search } = usePostStores();

  const [message, setMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const getPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!res.ok) {
          throw new Error("خطا در دریافت اطلاعات ❌");
        }

        const data = await res.json();
        const postsWithLikes = data.map((post) => ({...post, likes: 0}));
        
        setPosts(postsWithLikes);
      
      } catch (err) {
        setMessage(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getPosts();
   
  }, []);

  if (isLoading)
    return (
      <p className="font-medium text-sm text-center animate-pulse">
        {"درحال استخراج اطلاعات ⏱"}
      </p>
    );
  if (message)
    return (
      <p className="font-medium text-sm text-center animate-pulse">{message}</p>
    );

    const filterPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.body.toLowerCase().includes(search.toLowerCase()) 
    );

  return (
    <div className="space-y-2">
      <SearchBar />
      {filterPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
