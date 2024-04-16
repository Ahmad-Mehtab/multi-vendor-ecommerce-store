import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../static/Data";
import styles from "../styles/styles";
import { AiFillHeart, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

function ProductDetailPage() {
  const { name } = useParams();
  const productName = name.replace(/-/g, " ");

  const [data, setData] = useState(null);
  const [select, setSelect] = useState(1);
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(false);
  console.log("data: ", data);

  useEffect(() => {
    const proData = productData.find((proItem) => proItem.name === productName);
    setData(proData);
  }, [name]);
  return (
    <div className="bg-white">
      {data && (
        <div className={`${styles.section} w-full px-5 1100px:px-10 1100px:w-[80%]`}>
          <div className="w-full block 800px:flex">
            <div className="w-full 800px:w-[50%] px-0 400px:px-5">
              <img src={data.image_Url[select].url} alt="" />
              <div className="w-full flex ">
                <div
                  className={`${select === 0 ? "border" : null} cursor-pointer`}
                >
                  <img
                    src={data.image_Url[0].url}
                    className="h-[200px]"
                    alt=""
                    onClick={() => setSelect(0)}
                  />
                </div>
                <div
                  className={`${select === 1 ? "border" : null} cursor-pointer`}
                >
                  <img
                    src={data.image_Url[1].url}
                    className="h-[200px]"
                    alt=""
                    onClick={() => setSelect(1)}
                  />
                </div>
              </div>
            </div>
            <div className="block 800px:w-[50%] !mt-5 w-full">
              <h1 className={`${styles.productTitle} `}>{data.name}</h1>
              <p>{data.description}</p>
              <div className="flex pt-3">
                <h4 className={`${styles.productDiscountPrice}`}>
                  {data.discount_price}$
                </h4>
                <h3 className={`${styles.price}`}>
                  {data.price ? data.price + "$" : null}$
                </h3>
              </div>
              <div className="flex justify-between items-center mt-5">
                <form class="max-w-xs">
                  <div class="relative flex items-center max-w-[8rem]">
                    <button
                      type="button"
                      onClick={() => {
                        if (count > 0) setCount(count - 1);
                      }}
                      class="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-4 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                    >
                      <svg
                        class="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                      {count}
                    </span>
                    <button
                      type="button"
                      onClick={() => setCount(count + 1)}
                      class="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-r px-4 py-4 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                    >
                      <svg
                        class="w-3 h-3 text-gray-900 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
                {click ? (
                  <AiFillHeart
                    size={25}
                    onClick={() => setClick(!click)}
                    color={click ? "red" : "#333"}
                    title="remove from whitelist"
                  />
                ) : (
                  <AiOutlineHeart
                    size={25}
                    onClick={() => setClick(!click)}
                    color={click ? "red" : "#333"}
                    title="add to whitelist"
                  />
                )}
              </div>
              <button className={`${styles.button} mt-4`}>
                Add To cart
                <AiOutlineShoppingCart size={22} className="ml-1" />{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetailPage;
