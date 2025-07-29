import { Link } from "react-router-dom";
import type { Product } from "../../interfaces/Product";
import Rating from "../rating/rating";
export default function ProductCard({ product }: { product: Product }) {
  return (
    <>
      <div className=" w-[100%]  my-5 sm:w-1/2 md:w-1/3 lg:w-1/4   p-2">
        <div className="rounded-3xl shadow-lg shadow-black/20 hover:shadow-black/50 hover:scale-[1.01] transition-all duration-[0.5s] border-1 border-gray-300">
          <Link to={`/productDetails/${product.id}`} className="block">
            <div className="product-image w-full p-5 bg-white rounded-t-3xl">
              <img
                src={product.image}
                alt={product.title}
                className="w-[250px] h-[250px] object-contain m-auto "
              />
            </div>

            <div className="">
              <div className="bg-gray-200 dark:bg-gray-700/50  product-details rounded-b-3xl p-6">
                <h2 className="text-lg font-bold line-clamp-1 ">
                  {product.title}
                </h2>
                <p className="capitalize text-gray-600 dark:text-gray-200 my-2">
                  {product.category}
                </p>
                <Rating rating={product.rating} />

                <div className=" flex justify-between items-center my-3">
                  <span className="text-xl font-bold">${product.price}</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="btn cursor-pointer bg-blue-700 w-10 h-10 flex items-center justify-center rounded-full "
                  >
                    <i className="fa-solid fa-plus "></i>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
