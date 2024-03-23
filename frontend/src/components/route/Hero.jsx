import React from "react";
import styles from "../../styles/styles";

function Hero() {
  return (
    <div
      className={`relative min-h-[70vh] 800:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        background:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`800px:w-[60%] ${styles.section}`}>
        <h1 className="text-[35px] 800px:text-[60px] leading-[1.2] text-[#3d3a3a] font-[600] capitalize">
          Best Collection for <br /> home Decoration
        </h1>
        <p className="pt-5 text-[#000000ba] text-[17px] font-[Poppins] font-[400]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          accusamus molestias voluptatum, ipsum sint voluptates. Maxime vero
          praesentium, incidunt modi nobis tempora autem quaerat dolor impedit
          possimus aperiam. Numquam, vitae! autem quaerat dolor impedit
          possimus aperiam. Numquam, vitae!
        </p>
      
      </div>
    </div>
  );
}

export default Hero;
