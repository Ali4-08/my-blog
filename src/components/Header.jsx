import usePostStores from "../store/usePostStors";


export default function Header() {
  
  const {isDark, setIsDark} = usePostStores();
 

  return (
    <div className="flex items-center justify-between bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 text-center p-4 mb-8 border-b border-gray-300">
     
      <div className="flex-1">
        <h1 className="text-2xl font-bold">وبلاگ من</h1>
        <p className="mt-2 font-semibold">
          آخرین نوشته‌ها و یادداشت‌های شخصی من
        </p>
      </div> 

      <button className="text-lg cursor-pointer"
      onClick={setIsDark}>
       {isDark ? "☀️" : "🌙"}  
      </button>

    </div>
  );
}
