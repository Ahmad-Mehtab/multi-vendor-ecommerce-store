import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { footerProductLinks, footerSupportLinks, footercompanyLinks } from "../../static/Data";

function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="bg-[#342ac8] p-3 800px:px-10 800px:py-6 md:flex md:justify-between items-center text-center md:text-start ">
        <div>
          <h1 className="lg:text-[40px] text-[30px] text-center md:text-start font-[500] leading-snug">
            <span className="text-[#56d879] ">Subscribe</span> us for get news{" "}
            <br /> events and offers
          </h1>
        </div>
        <div className="grid items-center 400px:flex gap-3 justify-center md:mt-0 mt-5">
          <input
            type="text"
            placeholder="enter your email"
            className="py-2 px-2 w-72 rounded-md placeholder:text-slate-400 placeholder:font-[500] text-slate-900 "
          />
          <button className="bg-[#56d879] py-2 hover:bg-teal-500 duration-300 px-5 rounded-md font-[500]">
            Submit
          </button>
        </div>
      </div>

      <div className="grid lg:place-items-center grid-cols-1 rounded-lg gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-4 p-3 800px:p-10 lg:py-12 xl:gap-[30px]">
        <div>
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            style={{ filter: "brightness(0) invert(1)" }}
            alt=""
          />
          <p className="text-[#fff] mt-5">
            The home and elements needed to create beautiful products
          </p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </div>
        <div>
          <h4 className="font-[500] text-[20px]">company</h4>
          <ul>
            {
              footerProductLinks.map((proItem, index) => (
                <li key={index}>
                  <Link to={proItem.link} className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6">
                    {proItem.name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>

        <div>
          <h4 className="font-[500] text-[20px]">Shop</h4>
          <ul>
            {
              footercompanyLinks.map((proItem, index) => (
                <li key={index} className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6">
                  {proItem.name}
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <h4 className="font-[500] text-[20px]">Support</h4>
          <ul>
            {
              footerSupportLinks.map((proItem, index) => (
                <li key={index} className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6">
                  {proItem.name}
                </li>
              ))
            }
          </ul>
        </div>

      </div>
      <div
        className="flex justify-around flex-wrap w-full gap-4 items-center
         text-center pt-2 text-gray-400 text-sm pb-4"
      >
        <span>© 2020 Becodemy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="sm:block flex items-center justify-center">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
