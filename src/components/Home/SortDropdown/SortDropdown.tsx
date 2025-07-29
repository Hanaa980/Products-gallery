import  type {Dispatch,SetStateAction } from 'react';

interface SortDropdownProps {
   sortType: string;
  setSortType: Dispatch<SetStateAction<string>>;
}
export default function SortDropdown({  sortType, setSortType }: SortDropdownProps) {


  return (
 <select     aria-label="Sort products"
            className="dark:appearance-auto w-full sm:w-[50%]  bg-white border border-gray-300 rounded-lg p-3  text-gray-700 shadow-sm focus:outline-none focus:ring-2 relative focus:ring-indigo-400 focus:border-indigo-500 dark:bg-gray-500 dark:border-gray-500  dark:text-white "
            name="sortType"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="" disabled hidden>
              Sort by 
            </option>
            <option className="text-[14px] "  value=""> default</option>
            <option className="text-[14px] "  value="title-asc">Name A-Z</option>
            <option  className="text-[14px] " value="title-desc">Name Z-A</option>
            <option className="text-[14px] "  value="price-asc">Price: Low to High</option>
            <option className="text-[14px] "  value="price-desc">Price: High to Low</option>
          </select>
  )
}
