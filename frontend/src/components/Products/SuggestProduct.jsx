import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import { productData } from "../../static/Data";
import ProductCard from "../route/ProductCard/ProductCard";

const SuggestProduct = ({ data }) => {
  const [products, setProducts] = useState(null);


  useEffect(() => {
    // Check if data is not null before proceeding
    if (data) {
      const proData = productData.filter(
        (item) => item.category === data.category
      );

      setProducts(proData);
    }
  }, [data]); // Run useEffect whenever data changes

  // Render nothing if data is null
  if (!data) {
    return null;
  }
  return (
    <div className="bg-[#f5f5f5]">
      {data ? (
        <div className={`${styles.section} p-4`}>
          <h1
            className={`${styles.heading} text-[25px] font[500] border-b mb-5`}
          >
            Related Product
          </h1>
          <div className={`${styles.gridCol}`}>
            {products &&
              products.map((i, index) => <ProductCard data={i} key={index} />)}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SuggestProduct;
