import { BrowserRouter, Routes, Route } from "react-router-dom";
// ****************************************************

import Header from "./components/Header";
import AddPostForm from "./components/AddPostForm";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails"
import Footer from "./components/Footer";
import usePostStores from "./store/usePostStors";


function App() {

  const {isDark} = usePostStores();

 if(isDark){
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  
  return (
   
      <BrowserRouter>
        <div className="bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 min-h-screen w-full">
          <div className="flex flex-col  max-w-3xl mx-auto p-2 sm:p-4">
            <Header />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={
                    <>
                    <AddPostForm />
                    <BlogList />
                    </>
                    } />
                  <Route path="/posts/:id" element={<BlogDetails />} />
                </Routes>
              </main>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
   
  );
}

export default App;
