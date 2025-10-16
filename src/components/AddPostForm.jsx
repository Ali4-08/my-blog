import { useForm } from "react-hook-form";
import { useState } from "react";
import usePostStores from "../store/usePostStors";



export default function AddPostForm() {

  const {register, handleSubmit, reset, formState: {errors}} = useForm();
  const {posts, setPosts, message, setMessage} = usePostStores();
  

  const onSubmit = (data) => {
    const newPost = {
      id: posts.length + 1,
      title: data.title,
      body: data.body,
    };

    setPosts([newPost, ...posts]);
    setMessage("اطلاعات با موفقیت ثبت شد ✅");
    reset();

  };

  setInterval(() => {
   if(message) setMessage("");
  }, 5000);

  return (
    <form 
    onSubmit={handleSubmit(onSubmit)}
    className="bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 p-4 shadow-sm border border-gray-300 mb-8 rounded-md space-y-4">
      <div>
        <label className="block mb-1 text-sm font-medium">عنوان پست</label>

        <input
          type="text"
          {...register("title", {required: "عنوان پست الزامیست..!"})}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
        {errors.title && (<p className="text-red-500">{errors.title.message}</p>)}
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">متن پست</label>

        <textarea
          type="text"
          {...register("body", {required: "متن پست الزامیست"})}
          className="border border-gray-300 rounded-md p-2 w-full"
        ></textarea>
         {errors.body && (<p className="text-red-500">{errors.body.message}</p>)}
      </div>

      <button
        type="submit"
        className="bg-gray-400 text-gray-100 dark:bg-gray-400 dark:text-gray-100 hover:bg-slate-500 rounded-md px-4 py-2 transition"
      >
        ارسال پست
      </button>

      {message && (<p className="text-green-500 text-center font-medium">{message}</p>)}
    </form>

  
  );
}
