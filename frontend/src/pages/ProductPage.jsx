import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productData } from "../static/Data";
import Header from "../components/layout/Header";
import styles from "../styles/styles";
import ProductCard from "../components/route/productcard/ProductCard";

function ProductPage() {
  const [data, setData] = useState([]);
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  console.log('category: ', category);

  useEffect(() => {
    if (category === null) {
        const proData = productData.sort((a, b) => a.total_sell - b.total_sell);
      setData(proData);
    } else {
      const proData = productData.filter(
        (proItem) => proItem.category === category
      );
      setData(proData);
    }
  }, [category]);
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

export default ProductPage;
