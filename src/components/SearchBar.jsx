import usePostStores from "../store/usePostStors";


export default function SearchBar() {

const {search, setSearch} = usePostStores();


  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="جستجو بر اساس عنوان و متن پست"
      className="bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 w-full border border-gray-300 rounded-md p-2 mb-4"
    />
  );
}
