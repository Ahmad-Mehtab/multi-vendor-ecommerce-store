import React, { useState } from "react";
import styles from "./../../styles/styles";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../../static/Data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart.jsx";

function Header() {
  const { isAuthorized, currentUser } = useSelector((state) => state.user);
  console.log("currentUser: ", currentUser);
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(null);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchValue(term);

    const filterdProduct = productData?.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchData(filterdProduct);
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div>
            <Link to={"/"}>
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt="missing"
              />
            </Link>
          </div>
          {/* Search functionality */}
          <div className="w-[50%] relative">
            <input
              type="text"
              value={searchValue}
              onChange={handleSearch}
              className="border-solid border-2 border-indigo-500 rounded-md w-full h-[40px]"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    return (
                      <Link to={`/product/${i._id}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            key={i._id}
                            src={`${i.image_Url[0]?.url}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
          <div className={`${styles.button} ml-4 !rounded-[4px]`}>
            <Link to="/shop-create">
              <h1 className="text-[#fff] flex items-center">
                Become Seller <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active == true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px] `}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative  h-[60px] mt-[0px] w-[270px] hidden 1000px:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button className="w-full h-full rounded-md text-lg font-medium  bg-white">
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
            </div>
            {dropDown && (
              <DropDown
                setDropDown={setDropDown}
                categoriesData={categoriesData}
              />
            )}
          </div>
          <div>
            <Navbar />
          </div>
          <div className={`${styles.noramlFlex} gap-3`}>
            <div className="relative cursor-pointer">
              <AiOutlineHeart size={33} color="white" />
              <span className="absolute top-0 right-0 text-white font-medium text-sm w-4 h-4 flex items-center justify-center bg-green-600 p-[2px] rounded-full">
                0
              </span>
            </div>

            <div
              className="relative cursor-pointer"
              onClick={() => setOpenCart(!openCart)}
            >
              <AiOutlineShoppingCart size={33} color="white" />
              <span className="absolute top-0 right-0 text-white font-medium text-sm w-4 h-4 flex items-center justify-center bg-green-600 p-[2px] rounded-full">
                1
              </span>
            </div>
            <div className="relative cursor-pointer">
              {isAuthorized ? (
                <Link to={"/profile"}>
                  <img
                    src={currentUser.avatar.url}
                    className="w-8 h-8 rounded-full object-cover"
                    alt="missing"
                  />
                </Link>
              ) : (
                <Link to={"/login"}>
                  <CgProfile size={33} color="white" />
                </Link>
              )}
            </div>
            {openCart ? (
              <Cart setOpenCart={setOpenCart} openCart={openCart} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
