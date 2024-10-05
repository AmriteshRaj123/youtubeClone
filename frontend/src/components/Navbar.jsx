import React from 'react'
import Avatar from 'react-avatar';
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import logo from "../../../frontend/public/YouTube-Logo.png"
import profile from "../../../frontend/public/profile-logo.png" 

function Navbar() {
  return (
    <div className="flex justify-between px-6 py-2">

      {/* div one threeline icon and youtube logo....  */}
      <div className=" flex items-center space-x-4">
        <AiOutlineMenu className="text-xl cursor-pointer"/>
        <img src={logo} alt="" className="w-28 cursor-pointer" />
      </div>

     {/* div two search box and search icon  */}
      <div className="flex items-center w-[35%] ">
        <div className='w-[100%] px-3 py-2 border rounded-l-full'>
          <input type="text" placeholder='Search' className=' outline-none' />
        </div>

       <button className='px-4 py-2 border rounded-r-full'>
       <CiSearch size={"24px"} />
       </button>

        <IoMdMic size={"42px"} className='ml-3 rounded-full p-2 cursor-pointer hover:bg-gray-200 ' />
      </div>

      {/* div third video icon , wellicon and profile */}
      <div className="flex space-x-5 items-center">
      <RiVideoAddLine className='text-2xl'   />
      <AiOutlineBell  className='text-2xl'  />
      <Avatar src={profile} size='32' round={true} />

      </div>
    </div>

  );
}

export default Navbar;

 
