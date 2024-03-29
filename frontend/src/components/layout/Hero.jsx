import React from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className={`relative min-h-[70vh] 800:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        background:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`w-[90%] 800px:w-[50%] ${styles.section}`}>
        <h1 className="text-[35px] 800px:text-[60px] leading-[1.2] text-[#3d3a3a] font-[600] capitalize">
          Best Collection for <br /> home Decoration
        </h1>
        <p className="pt-5 text-[#000000ba] text-[18px] font-[Poppins] font-[400]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          accusamus molestias voluptatum, ipsum sint voluptates. Maxime vero
          praesentium, incidunt modi nobis tempora autem quaerat dolor impedit
          possimus aperiam. Numquam, vitae! autem quaerat dolor impedit possimus
          aperiam. Numquam, vitae!
        </p>
        <Link to={"/products"} className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-white font-bold font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
