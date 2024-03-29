import React, { useEffect, useState } from "react";
import { productData } from "../../../static/Data";
import styles from "../../../styles/styles";
import ProductCard from "../productcard/ProductCard";

function BestDeals() {
  const [data, setData] = useState([]);
  console.log('data: ', data);
  useEffect(() => {
    const sortData =
      productData && productData.sort((a, b) => a.total_sell - b.total_sell);
    const firstFiveProduct = sortData.slice(0, 5);
    setData(firstFiveProduct);
  }, []);
  return (
    <>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Best Deals</h1>
        </div>
        <div className="grid grid-cols-1 rounded-lg gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px] bg-white p-12">
          {data &&
            data.map((dataItem, index) => (
              <ProductCard data={dataItem} key={index} />
              
            ))}
        </div>
      </div>
    </>
  );
}

export default BestDeals;
