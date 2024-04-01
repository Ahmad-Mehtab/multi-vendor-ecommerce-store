import React, { useState } from "react";
import { Modal } from "antd";
import styles from "../../../styles/styles";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";

function ProductDetailCard({ open, setOpen, data }) {
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(false);
  return (
    <>
      {data ? (
        <Modal
          title=""
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          cancelButtonProps={{ style: { display: "none" } }}
          width={1000}
          footer={null}

        >
          <div className="md:flex md:p-5 sm:block">
            <div className="flex-1">
              <img
                src={data?.image_Url[0]?.url}
                alt=""
                className="md:w-[80%] 400px:w-[60%] sm:w-[50%] m-auto"
              />
              <div className="md:block  flex flex-wrap justify-between items-center mb-4 md:m-0">
                <div className="flex item-center gap-2">
                  <img
                    className="w-12 h-12 rounded-full object-fill"
                    src={data?.shop.shop_avatar.url}
                    alt=""
                  />
                  <div>
                    <p className={`${styles.shop_name} pb-0 pt-0 `}>
                      {data.shop.name}
                    </p>
                    <p className="font-[600] text-[15px]">
                      ({data.rating}) Ratings
                    </p>
                  </div>
                </div>

                <button className={`${styles.button} `}>
                  Send Message
                  <AiOutlineMessage size={22} className="ml-1" />{" "}
                </button>
                <h3 className="text-red-500 font-[600] text-[16px]">({data.total_sell}) Sold Out</h3>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="font-[800] text-[22px]">{data.name}</h1>
              <p className="text-[16px]">{data.description}</p>
              <h4 className="text-[20px] font-[600] mt-2">
                {data.price === 0 ? data.price : data.discount_price}$
              </h4>
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
              <button className={`${styles.button} `}>
                Add To cart
                <AiOutlineShoppingCart size={22} className="ml-1" />{" "}
              </button>
            </div>
          </div>
        </Modal>
      ) : (
        <h1>No Record exist</h1>
      )}
    </>
  );
}

export default ProductDetailCard;
