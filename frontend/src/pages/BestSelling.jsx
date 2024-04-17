import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productData } from "../static/Data";
import Header from "../components/layout/Header";
import styles from "../styles/styles";
import ProductCard from "../components/route/ProductCard/ProductCard";

function BestSelling() {
  const [data, setData] = useState();
  useEffect(() => {
    const proData = productData.sort((a, b) => b.total_sell - a.total_sell);
    console.log('proData: ', proData);
    setData(proData);
  }, []);
  return (
    <div>
      {/* <Header /> */}
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className={`${styles.gridCol}`}>
          {data &&
            data.map((item, index) => <ProductCard key={index} data={item} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-[35px] text-black text-center">No Data Exits</h1>
        ) : null}
      </div>
    </div>
  );
}

export default BestSelling;
