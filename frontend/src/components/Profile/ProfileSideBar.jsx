import React from 'react'
import styles from '../../styles/styles'
import { RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TbReceiptRefund } from "react-icons/tb";
import { AiOutlineLogout, AiOutlineMessage } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { MdOutlineTrackChanges } from "react-icons/md";
import { AiOutlineCreditCard } from "react-icons/ai";
import { TbAddressBook } from "react-icons/tb";


function ProfileSideBar({active, setActive}) {
  const navigate=  useNavigate();
  return (
    <div className='w-full bg-white rounded-[10px] shadow-sm p-4 '>
      <div className={`${styles.noramlFlex} py-4 cursor-pointer  rounded-md`} onClick={()=> setActive(0)}>
        <RxPerson size={25} color={active === 0 ? 'red' :""}/>
        <span className={`${active === 0 ? "text-[red]" : ""} pl-3 font-[500] text-[17px]`}>Profile</span>
      </div>
      <div className={`${styles.noramlFlex} py-4 cursor-pointer  rounded-md`} onClick={()=> setActive(1)}>
        <HiOutlineShoppingBag size={25} color={active === 1 ? 'red' :""}/>
        <span className={`${active === 1 ? "text-[red]" : ""} pl-3 font-[500] text-[17px]`}>Orders</span>
      </div>
      <div className={`${styles.noramlFlex} py-4 cursor-pointer  rounded-md`} onClick={()=> setActive(3)}>
        <TbReceiptRefund size={25} color={active === 3 ? 'red' :""}/>
        <span className={`${active === 3 ? "text-[red]" : ""} pl-3 font-[500] text-[17px]`}>Refunds</span>
      </div>
      <div className={`${styles.noramlFlex} py-4 cursor-pointer  rounded-md`} onClick={()=> setActive(4) || navigate('/inbox')}>
        <AiOutlineMessage size={25} color={active === 4 ? 'red' :""}/>
        <span className={`${active === 4 ? "text-[red]" : ""} pl-3 font-[500] text-[17px]`}>Inbox</span>
      </div>
      <div className={`${styles.noramlFlex} py-4 cursor-pointer  rounded-md`} onClick={()=> setActive(5)}>
        <MdOutlineTrackChanges size={25} color={active === 5 ? 'red' :""}/>
        <span className={`${active === 5 ? "text-[red]" : ""} pl-3 font-[500] text-[17px]`}>Track Changes</span>
      </div>
      <div className={`${styles.noramlFlex} py-4 cursor-pointer  rounded-md`} onClick={()=> setActive(6)}>
        <AiOutlineCreditCard size={25} color={active === 6 ? 'red' :""}/>
        <span className={`${active === 6 ? "text-[red]" : ""} pl-3 font-[500] text-[17px]`}>Payment Methods</span>
      </div>
      <div className={`${styles.noramlFlex} py-4 cursor-pointer  rounded-md`} onClick={()=> setActive(7)}>
        <TbAddressBook size={25} color={active === 7 ? 'red' :""}/>
        <span className={`${active === 7 ? "text-[red]" : ""} pl-3 font-[500] text-[17px]`}>Address</span>
      </div>
      <div className={`${styles.noramlFlex} py-4 cursor-pointer  rounded-md`} onClick={()=> setActive(8)}>
        <AiOutlineLogout size={25} color={active === 8 ? 'red' :""}/>
        <span className={`${active === 8 ? "text-[red]" : ""} pl-3 font-[500] text-[17px]`}>Log out</span>
      </div>
    </div>
  )
}

export default ProfileSideBar