import React from 'react';
import { SlMenu } from "react-icons/sl";
import { LuUserCircle2 } from "react-icons/lu";
import { BsCart3 } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import Logo from '/Images/logo.svg';
import { MdOutlinePhoneIphone } from 'react-icons/md';

export default function Navbar() {
  return (
    <div className='max-w-[1600px] mx-auto'>
      <div className='flex justify-between p-[8px_16px]'>
        <div className='flex items-center lg:w-[70%]'>
          <button className='mr-[12px]'>
            <SlMenu />
          </button>
          <img src={Logo} alt='Logo' className='h-[40px] w-[160px]' />
          <div className='relative ml-[30px] w-full lg:block hidden'>
            <input type="text" placeholder='Search for Products, Brands and More' className='bg-[#f0f5ff] rounded-lg h-[40px] px-[20px] pl-[44px] max-w-[500px] w-full outline-none' />
            <IoSearch className='text-[22px] text-[#717478] absolute top-[50%] left-[12px] translate-y-[-50%]' />
          </div>
        </div>
        <div className='flex items-center sm:gap-[20px] gap-[12px]'>
          <MdOutlinePhoneIphone className='scale-110' />
          <button className='flex items-center sm:gap-[10px] gap-1'><LuUserCircle2 className='text-[22px]' /> <span>Login</span></button>
          <button className='text-[22px]'><BsCart3 /></button>
        </div>
      </div>
      <div className='sm:px-[40px] px-[16px] mt-[4px]'>
        <div className='relative w-full lg:hidden block'>
          <input type="text" placeholder='Search for Products, Brands and More' className='bg-[#f0f5ff] rounded-lg h-[40px] px-[20px] pl-[40px] max-w-[500px] w-full outline-none text-[14px]' />
          <IoSearch className='sm:text-[22px] text-[20px] text-[#717478] absolute top-[50%] left-[12px] translate-y-[-50%]' />
        </div>
      </div>
    </div>
  )
}