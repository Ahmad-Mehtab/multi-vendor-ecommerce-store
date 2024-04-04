import React from "react";
import { Collapse } from "antd";
import styles from "../styles/styles";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { items } from "../static/Data";

const FAQ = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <Header />
      <div className={`${styles.section} min-h-[70vh]`}>
        <Collapse
          items={items}
          className="mt-20"
          defaultActiveKey={["1"]}
          onChange={onChange}
        />
      </div>
      <Footer />
    </>
  );
};
export default FAQ;
