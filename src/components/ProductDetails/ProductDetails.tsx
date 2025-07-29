import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ProductDetails } from "../../interfaces/Product";
import Rating from "../rating/rating";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

export default function ProductDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);

  const [productDetails, setProductDetails] = useState<ProductDetails>();

  async function getSingleProduct(id: string) {
    setLoading(true);
    try {
      let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProductDetails(data);
      setLoading(false);
    } catch {
      setLoading(false);
      toast.error("An error occurred. Please try again.");
    }
  }

  useEffect(() => {
    if (id) {
      getSingleProduct(id);
    }
  }, [id]);

  return (
    <>
      {!loading ? (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[80vh] pt-20">
            {productDetails && (
              <div className=" w-[100%] m-auto my-5 h-auto ">
                <div className="md:flex md:justify-between md:items-center p-5">
                  <div className="productDetails-image w-full md:w-1/3  p-5 border-1 mx-2 rounded-xl shadow-lg border-gray-300 dark:bg-white">
                    <img
                      src={productDetails.image}
                      alt={productDetails.title}
                      className="w-[250px] h-[250px] object-contain m-auto "
                    />
                  </div>

                  <div className=" md:w-2/3  ">
                    <div className="  productDetails-details ">
                      <div className="flex justify-between items-center px-5 flex-wrap">
                        <div className="">
                          <p className=" capitalize  mt-6 mb-3  p-2  w-[fit-content]   bg-[#124bf72b]  text-[#103197f0] dark:text-white dark:bg-[#5e70a6b9] font-bold rounded-full">
                            {productDetails.category}
                          </p>

                          <h2 className="text-lg font-bold">
                            {productDetails.title}
                          </h2>
                        </div>
                        <Rating rating={productDetails.rating} />
                      </div>
                      <div className="mt-5 mb-8  px-5">
                        <h3 className="text-lg font-bold">Description</h3>
                        <p className=" text-gray-700 dark:text-gray-300">
                          {productDetails.description}
                        </p>
                      </div>
                      <hr className="md:hidden text-gray-400" />

                      <div className=" flex justify-between items-center my-3  px-5">
                        <span className="text-xl font-bold">
                          ${productDetails.price}
                        </span>
                        <button className="btn cursor-pointer bg-blue-700 w-10 h-10 flex items-center justify-center rounded-full ">
                          <i className="fa-solid fa-plus "></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-lvh">
          <BeatLoader color="#1447e6" />
        </div>
      )}
    </>
  );
}
