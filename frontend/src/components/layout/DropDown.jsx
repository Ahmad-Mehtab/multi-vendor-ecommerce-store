import React from 'react'
import styles from '../../styles/styles';

function DropDown({categoriesData, setDropDown}) {
    console.log(categoriesData);
  return (
    <div className='pb-4 w-[270px] bg-[#fff] absolute z-30 rounded-md mt-[2px] border border-gray-600 shadow-sm'>
        {categoriesData && categoriesData.map(cate => (
            <div key={cate.id} className={`${styles.noramlFlex} gap-5 p-1`}>
                <img src={cate.image_Url} className='w-12 shadow-md'  alt="" />
                <p className='text-[17px]'>{cate.title}</p>
            </div>
        )) }
    </div>
  )
}

export default DropDown