import React, { useState } from "react";
import ProductDetailCard from "../ProductDetailCard/ProductDetailCard.jsx"

import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import styles, { truncateStyle } from "../../../styles/styles";
import { Link } from "react-router-dom";

function ProductCard({ data }) {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const proName = data.name.replace(/\s/g, '-');
  return (
    <>
      <div className="w-full  bg-white relative my-2 rounded-md  ">
        <div className="p-5">
          <Link to={`/products/${proName}`}>
            <img
              src={data && data.image_Url[0]?.url}
              alt=""
              className="w-full object-contain h-[200px] m-auto"
            />
          </Link>

          <Link to={`/products/${data.name}`}>
            <p className={`${styles.shop_name}`}>{data.shop.name}</p>
          </Link>
          <Link to={`/products/${data.name}`}>
            <h4 className="pb-3 font-[400]">
              {data.name.length > 40
                ? data.name.slice(0, 40) + "..."
                : data.name}
            </h4>
          
            <div className="flex my-3">
              <AiFillStar className="mr-2" size={20} color="#F6BA00" />
              <AiFillStar className="mr-2" size={20} color="#F6BA00" />
              <AiFillStar className="mr-2" size={20} color="#F6BA00" />
              <AiFillStar className="mr-2" size={20} color="#F6BA00" />
              <AiOutlineStar className="mr-2" size={20} color="#F6BA00" />
            </div>
            <div className="flex justify-between">
              <h5 className="text-[20px]">
                {data.price === 0 ? data.price : data.discount_price}$
              </h5>
              <span className={`${styles.price}`}>
                {data.price ? data.price + " $" : null}
              </span>
              <h5 className="font-[400] text-[17px] text-[#68d284]">
                {data.total_sell} sold
              </h5>
            </div>
          </Link>

          {/* side option  */}
          <div className="absolute top-5 right-3 grid gap-3 ">
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
            <AiOutlineEye
              size={25}
              onClick={() => setOpen(!open)}
              title="add to whitelist"
            />
            <AiOutlineShoppingCart
              size={25}
              onClick={() => setOpen(!open)}
              title="add to whitelist"
            />
          </div>

          { open && (
            <ProductDetailCard open={open} click={click} setOpen={setOpen} data={data} />
          ) }
        </div>
      </div>
    </>
  );
}

export default ProductCard;
