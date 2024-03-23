import React from 'react'
import styles from '../../styles/styles';
import { useNavigate } from 'react-router-dom';

function DropDown({categoriesData, setDropDown}) {
const navigate =  useNavigate();
const handleSubmit = (cate) => {
  navigate(`/products?category=${cate.title}`);
  setDropDown(false)
}
  return (
    <div className='pb-4 w-[270px] bg-[#fff] absolute z-30 rounded-md mt-[2px] border border-gray-600 shadow-sm'>
        {categoriesData && categoriesData.map(cate => (
            <div key={cate.id} onClick={()=> handleSubmit(cate)} className={`${styles.noramlFlex} gap-5 p-1 hover:bg-slate-300 select-none`}>
                <img src={cate.image_Url} className='w-12 shadow-md'  alt="" />
                <p className='text-[17px] cursor-pointer'>{cate.title}</p>
            </div>
        )) }
    </div>
  )
}

export default DropDown