import React, { useState } from "react";
import { Button, Drawer } from "antd";
import styles from "../../styles/styles";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiPlusSm } from "react-icons/hi";
import { LuMinus } from "react-icons/lu";

const Cart = ({ setOpenCart, openCart }) => {
  const onClose = () => {
    setOpenCart(false);
  };

  const cartItems = [
    {
      name: "Elegant Timepiece",
      description: "Classic Design for Discerning Men",
      price: 99.99,
    },
    {
      name: "Sleek Modern Watch",
      description: "Perfect Blend of Style and Functionality",
      price: 149.99,
    },
    {
      name: "Sporty Chronograph Watch",
      description: "Precision Engineering for Active Lifestyles",
      price: 199.99,
    },
    {
      name: "Luxurious Automatic Watch",
      description: "Exquisite Craftsmanship, Timeless Appeal",
      price: 249.99,
    },
    {
      name: "Vintage-Inspired Timepiece",
      description: "Retro Charm with Modern Features",
      price: 159.99,
    },
    {
      name: "Minimalist Dress Watch",
      description: "Sophistication in Simplicity",
      price: 79.99,
    },
  ];

  return (
    <>
      <Drawer onClose={onClose} open={openCart}>
        <div className={`${styles.noramlFlex} ml-2 gap-3`}>
          <IoBagHandleOutline size={40} />
          <h1 className="text-lg font-[500] my-5">3 item added</h1>
        </div>
        <div className="w-full">
          {cartItems &&
            cartItems.map((item, index) => (
              <CartSingle data={item} key={index} />
            ))}
        </div>
      </Drawer>
    </>
  );
};

const CartSingle = ({ data }) => {
  return (
    <div className={`${styles.noramlFlex} border py-5 px-3 w-full gap-5`} >
      <div className={`flex flex-col items-center justify-center w-fit gap-1`}>
        <HiPlusSm size={20} className="bg-red-600 text-white rounded-full " />
        <span className="text-lg">1</span>
        <LuMinus size={20} className="bg-gray-400 text-white rounded-full " />
      </div>
      <div>
        <img
          className="w-[60px] h-[60px]"
          src="https://arubafashion.pk/cdn/shop/files/1_18a82692-27a2-43a7-be93-0300be5aca67.webp?v=1691682566&width=600"
          alt=""
        />
      </div>

     <div>
     <p>{data.name}</p>
      <p>{data.description}</p>
      <p>{data.price}</p>
     </div>
    </div>
  );
};

export default Cart;
