import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import type { Product } from "./../../interfaces/Product";
import { BeatLoader } from "react-spinners";
import SearchBar from "./SearchBar/SearchBar";
import SortDropdown from "./SortDropdown/SortDropdown";
import { toast } from "react-toastify";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  function getProducts() {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then(({ data }) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error("An error occurred. Please try again.");
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    let filtered = products.filter(
      (product) =>
        product.title
          .toLowerCase()
          .startsWith(searchTerm.trim().toLowerCase()) ||
        product.category
          .toLowerCase()
          .startsWith(searchTerm.trim().toLowerCase())
    );

    let sorted = [...filtered];
    switch (sortType) {
      case "title-asc":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(sorted);
  }, [searchTerm, sortType, products]);

  return (
    <>
      <div className=" pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {loading ? (
          <div className="flex justify-center items-center h-lvh">
            <BeatLoader color="#1447e6" />
          </div>
        ) : (


          <div className="min-h-lvh  ">
            <div className=" text-center my-10">
              <h1 className="font-bold">Discover Our Collection</h1>
              <p>Browse through our curated selection of high-quality products.</p>
            </div>
            <div className=" mt-5 h-25   ">
              <div className=" flex flex-col sm:flex-row justify-between items-center mt-5 p-4 gap-2">
                <SearchBar
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
                <SortDropdown sortType={sortType} setSortType={setSortType} />
              </div>
            </div>
            <div className="mt-10 sm:mt-5">
              <div className="w-full flex flex-col justify-start sm:flex-row flex-wrap ">
                {searchTerm && filteredProducts.length === 0 ? (
                  <p className="text-red-500 dark:text-red-300 font-bold text-center text-2xl mt-10">
                    There are no products matching your search.
                    <br />
                    Please try again.
                  </p>
                ) : (
                  filteredProducts.map((product) => (
                    <ProductCard product={product} key={product.id} />
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
