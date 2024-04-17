import React from 'react'
import styles from '../../../styles/styles'
import { productData } from '../../../static/Data'
import ProductCard from '../ProductCard/ProductCard'

function FeaturedProduct() {
  return (
    <div className={`${styles.section}`}>
         <div className={`${styles.heading}`}>
          <h1>Featured Product</h1>
        </div>
        <div className={`${styles.gridCol} `}>
          {productData &&
            productData.map((dataItem, index) => (
              <ProductCard data={dataItem} key={index} />
              
            ))}
        </div>
    </div>
  )
}

export default FeaturedProduct