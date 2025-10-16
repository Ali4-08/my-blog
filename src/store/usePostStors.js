import { create } from "zustand";

const usePostStores = create((set) => ({
    posts: [],
    isLoading: false,
    search: "",
    message: "",
    isDark: false,



    setPosts: (newPost) =>
        set({posts: newPost}),

    setIsLoading: () =>
        set((state) => ({isLoading: !state.isLoading})),

   setLikes: (id) =>
    set((state) => ({
        posts: state.posts.map((post) =>
            post.id === id ? {...post, likes: post.likes + 1} : post
        ),
    })),

    setSearch: (text) => 
        set({search: text}),

    setMessage: (text) =>
        set({message: text}),

    setIsDark: () =>
        set((state) => ({
            isDark: !state.isDark,
        })),
}));

export default usePostStores;