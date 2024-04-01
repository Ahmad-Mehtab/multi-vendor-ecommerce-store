import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
import { Link } from "react-router-dom";

function PopularEvent() {
    return (
        <div
            className={`w-full block bg-white rounded-lg lg:flex p-2`}
        >
            <div className="w-full lg:-w[50%] m-auto">
                <img src={`https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mpwp3tua-apple-iphone-14-256gb-mavi-mpwp3tua-637986832343472449.jpg`} alt="" />
            </div>
            <div className="w-full lg:[w-50%] flex flex-col justify-center">
                zssfdfd
                <h2 className={`${styles.productTitle}`}>dfgdfgdfg</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum passages, and
                    more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                </p>
                <div className="flex py-2 justify-between">
                    <div className="flex">
                        <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
                            42343
                        </h5>
                        <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
                            54544
                        </h5>
                    </div>
                    <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
                        55555 sold
                    </span>
                </div>
                <CountDown />
                <br />
                <div className="flex items-center">
                    <Link to={`/product/`}>
                        <div className={`${styles.button} text-[#fff]`}>See Details</div>
                    </Link>
                    <div className={`${styles.button} text-[#fff] ml-5`}>Add to cart</div>
                </div>
            </div>
        </div>
    );
}

export default PopularEvent;
