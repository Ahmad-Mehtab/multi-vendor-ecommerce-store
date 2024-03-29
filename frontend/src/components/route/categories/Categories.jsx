import React from "react";
import styles from "../../../styles/styles";
import { brandingData, categoriesData } from "../../../static/Data";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.section} hidden sm:block`}>
        <div className="branding bg-white flex justify-between w-full my-12 shadow-sm p-5 rounded-md">
          {brandingData &&
            brandingData.map((brandItem, index) => (
              <div className="flex items-start" key={index}>
                <span
                  dangerouslySetInnerHTML={{ __html: brandItem.icon }}
                ></span>
                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">
                    {brandItem.title}
                  </h3>
                  <p className="text-xs md:text-sm ">{brandItem.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Category section */}
      <div className={`${styles.section} mb-12`}>
        <div className="grid grid-cols-1 rounded-lg gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px] bg-white p-12">
          {categoriesData &&
            categoriesData.map((cate, index) => {
              const handleSubmit = (cate) => {
                navigate(`/products?category=${cate.title}`);
              };
              return (
                <div key={index} onClick={() => handleSubmit(cate)} className="w-full h-[100px] flex items-center overflow-hidden justify-between">
                  <h5>{cate.title}</h5> 
                  <img src={cate.image_Url} className="w-[120px] object-cover" alt="" />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Categories;
