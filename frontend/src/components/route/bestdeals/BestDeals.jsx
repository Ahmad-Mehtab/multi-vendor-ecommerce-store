import React, { useEffect } from 'react'
import { productData } from '../../../static/Data';

function BestDeals() {
useEffect(() => {
  const sortData =   productData && productData.sort((a,b)=> a.total_sell - b.total_sell);
  const data = sortData.slice(0, 5);
}, []);

  return (
    <div>BestDeals</div>
  )
}

export default BestDeals