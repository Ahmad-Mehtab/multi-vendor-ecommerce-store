import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productData } from "../static/Data";
import styles from "../styles/styles";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import SuggestProduct from "../components/Products/SuggestProduct";

function ProductDetailPage() {
  const { name } = useParams();
  const productName = name.replace(/-/g, " ");

  const [data, setData] = useState(null);
  const [select, setSelect] = useState(1);
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const proData = productData.find((proItem) => proItem.name === productName);
    setData(proData);
  }, []);
  return (
    <div className="bg-white">
      {data && (
        <div
          className={`${styles.section} w-full px-5 1100px:px-10 1100px:w-[80%]`}
        >
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
                          strokeWidth="2"
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
                          strokeWidth="2"
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
              <div className="flex items-center gap-5 mt-10 flex-wrap">
                <img
                  className="w-12 h-12 rounded-full object-fill"
                  src={data?.shop.shop_avatar.url}
                  alt=""
                />
                <div>
                  <p className={`${styles.shop_name} !p-0`}>{data.shop.name}</p>
                  <p className="font-[600] text-[15px]">
                    ({data.rating}) Ratings
                  </p>
                </div>
                <button className={`${styles.button} bg-indigo-600 !h-[43px]`}>
                  Send Message
                  <AiOutlineMessage size={22} className="ml-1" />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <ProductDetailInfo data={data} />
      <SuggestProduct data={data} />
    </div>
  );
}

const ProductDetailInfo = ({ data }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="bg-[#f1f5f9] w-[95%] 800px:w-[80%] mx-auto my-10 p-10 rounded-md">
      <div className="grid md:flex gap-y-4 justify-between items-center border-b pb-4">
        <div className="relative">
          <h5
            className="text-[#000] leading-5 cursor-pointer text-[20px] font-[600]"
            onClick={() => setActive(0)}
          >
            Product Detail
          </h5>
          {active === 0 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-[#000] leading-5 cursor-pointer text-[20px] font-[600]"
            onClick={() => setActive(1)}
          >
            Product Reviews
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-[#000] leading-5 cursor-pointer text-[20px] font-[600]"
            onClick={() => setActive(2)}
          >
            Seller Information
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>

      {active === 0 && (
        <>
          <p className="py-2 text-[17px] leading-8 pb-5 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            delectus, nesciunt soluta et sed temporibus ad explicabo sit
            similique alias sunt rem praesentium! Voluptatem explicabo quo
            excepturi, ea fugit harum? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facilis delectus, nesciunt soluta et sed
            temporibus ad explicabo sit similique alias sunt rem praesentium!
            Voluptatem explicabo quo excepturi, ea fugit harum?
          </p>
          <p className="py-2 text-[17px] leading-8 pb-5 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            delectus, nesciunt soluta et sed temporibus ad explicabo sit
            similique alias sunt rem praesentium! Voluptatem explicabo quo
            excepturi, ea fugit harum? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facilis delectus, nesciunt soluta et sed
            temporibus ad explicabo sit similique alias sunt rem praesentium!
            Voluptatem explicabo quo excepturi, ea fugit harum?
          </p>
          <p className="py-2 text-[17px] leading-8 pb-5 whitespace-pre-line">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            delectus, nesciunt soluta et sed temporibus ad explicabo sit
            similique alias sunt rem praesentium! Voluptatem explicabo quo
            excepturi, ea fugit harum? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facilis delectus, nesciunt soluta et sed
            temporibus ad explicabo sit similique alias sunt rem praesentium!
            Voluptatem explicabo quo excepturi, ea fugit harum?
          </p>
        </>
      )}
      {active === 1 && (
        <div className="min-h-[250px] flex items-center justify-center">
          <p className="text-[19px]">No Reviews yet!</p>
        </div>
      )}
      {active === 2 && (
        <div className="min-h-[250px] grid 800px:flex">
          <div className="flex flex-1 items-center mt-4 flex-wrap">
            <img
              className="w-12 h-12 rounded-full object-fill"
              src={data?.shop.shop_avatar.url}
              alt=""
            />
            <div className="ml-4">
              <p className={`${styles.shop_name} !p-0`}>{data.shop.name}</p>
              <p className="font-[600] text-[15px]">({data.rating}) Ratings</p>
            </div>
            <p className="py-2 text-[17px] leading-7 whitespace-pre-line">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              delectus, nesciunt soluta et sed temporibus ad explicabo sit
              similique alias sunt rem praesentium! Voluptatem explicabo quo
              excepturi, ea fugit harum? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Facilis delectus, nesciunt soluta et sed
              temporibus ad explicabo sit similique alias sunt rem praesentium!
              Voluptatem explicabo quo excepturi, ea fugit harum?
            </p>
          </div>
          <div className="flex-1 text-end mt-4">
            <p className="text-[17px] font-[500] leading-9">
              <span>Join on: </span>14 March, 2023
            </p>
            <p className="text-[17px] font-[500] leading-9">
              <span>Total Products: </span>1,234
            </p>
            <p className="text-[17px] font-[500] leading-9">
              <span>Total Reviews: </span>324
            </p>
            <Link to="/">
              <button
                className={`${styles.button} !rounded-[4px] !inline-flex !h-[40px]`}
              >
                Visit Shop
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
