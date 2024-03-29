import React from 'react'

function ProductCard({data}) {
  console.log('data: ', data);
  return (
    <>
    <div className="w-full h-[347px]">
      <div>
        <img src={data && data.image_Url[0]?.url} alt="" /> 
      </div>
    </div>
    </>
  )
}

export default ProductCard