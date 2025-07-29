import type { Dispatch, SetStateAction } from "react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}
export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: SearchBarProps) {
  return (
   
        <input
          className=" dark:bg-gray-500 w-full sm:w-[50%] bg-white p-3.5 rounded-lg border border-gray-300 dark:border-gray-500  focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 dark:text-white dark:placeholder:text-white text-black"
          type="search"
          name="searchTerm"
          id="search"
          placeholder="Search by title or category"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

  );
}
