import { useState } from "react";
import { Drawer } from "antd";
import styles from "../../styles/styles";
import { IoBagHandleOutline } from "react-icons/io5";
// import { LuMinus } from "react-icons/lu";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { BsCartPlusFill } from "react-icons/bs";

const WishList = ({ setOpenCart, openCart }) => {
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
        <div className={`${styles.noramlFlex} ml-4 my-5 gap-3 `}>
          <IoBagHandleOutline size={40} />
          <h1 className="text-[23px] font-[600]">3 items</h1>
        </div>
        <div className="w-full">
          {cartItems &&
            cartItems.map((item, index) => (
              <CartSingle data={item} key={index} />
            ))}
        </div>

        <div className="my-5 text-center">
          <Link to="/checkout">
            <button className="bg-red-600 text-white h-[50px] w-[80%] rounded-[5px] text-[18px] font-[600]">
              Checkout Now (USD$1080)
            </button>
          </Link>
        </div>
      </Drawer>
    </>
  );
};

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  return (
    <div className={`${styles.noramlFlex} justify-between border py-5 px-5 w-full`}>
      {/* <div className={`flex flex-col items-center justify-center w-fit gap-1`}>
        <HiPlusSm
          onClick={() => setValue(value + 1)}
          size={20}
          className="bg-red-600 text-white rounded-full "
        />
        <span className="text-lg">{value}</span>
        <LuMinus
          onClick={() => setValue(value === 1 ? 1 : value - 1)}
          size={20}
          className="bg-gray-400 text-white rounded-full "
        />
      </div> */}
      <div>
        <img
          className="w-[60px] h-[60px]"
          src="https://arubafashion.pk/cdn/shop/files/1_18a82692-27a2-43a7-be93-0300be5aca67.webp?v=1691682566&width=600"
          alt=""
        />
      </div>

      <div>
        <p>{data.name}</p>
        {/* <p>{data.description}</p> */}
        <p className="text-[17px] text-gray-600 my-[3px]">
          {data.price} * {value}
        </p>
        <p className="text-[17px] font-[500] text-red-600 font-Roboto">
          US${data.price}
        </p>
      </div>

      <div>
        <BsCartPlusFill 
          size={20}
        />
      </div>
    </div>
  );
};

export default WishList;
