import React from 'react'
import { MdOutlineStarOutline } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GiCircleClaws } from "react-icons/gi";
import { GrMultimedia } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { GiSkullCrossedBones } from "react-icons/gi";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Menubar() {
    
    const navigate = useNavigate()
    const lightMode = useSelector((state)=>state.toggleSlice.isLightMode);

    const logoutHandler = ()=>{
        localStorage.removeItem("email");
        navigate("/")
    }
  return (
    <div className={`pt-16 px-6 ${!lightMode ? "bg-[#EEF6EF]" : "bg-[#2C2C2C]"}`}>

        <div className='flex justify-between items-center border-black border-t py-4 px-3'>
            <div className='flex items-center gap-4'>
                <input type="checkbox" className='w-4 h-4' />
                <p>Buy Groceries</p>
            </div>
            <p className='text-2xl'><MdOutlineStarOutline/></p>
        </div>

        <div className='flex gap-4 items-center border-black border-t py-3 px-3'>
            <p className='text-3xl'><GoPlus/></p>
            <p>Add Step</p>
        </div>

        <div className='flex gap-4 items-center border-black border-t py-4 px-3'>
            <p className='text-2xl'><IoMdNotificationsOutline/></p>
            <p>Set Reminder</p>
        </div>

        <div className='flex gap-4 items-center border-black border-t py-4 px-3'>
            <p className='text-2xl'><GrMultimedia/></p>
            <p>Add Due Date</p>
        </div>

        <div className='flex gap-4 items-center border-black border-t py-4 px-3'>
            <p className='text-2xl'><GiCircleClaws/></p>
            <p>Repeat</p>
        </div>

        <div className='flex gap-4 items-center border-black border-t py-4 px-3'>
            <p className='font-semibold pl-3'>Add Notes</p>
        </div>

        <div onClick={logoutHandler} className='flex gap-4 justify-end items-center border-black border-t py-4 px-3 cursor-pointer'>
            <p className='font-semibold  bg-[#fb641b] px-4 py-2 rounded-lg text-white'>Logout</p>
        </div>


        <div className='mt-24 py-7 flex justify-between items-center text-xl'>
            <p className='text-2xl'><GiSkullCrossedBones/></p>
            <p>Created Today</p>
            <p className='text-2xl'><AiOutlineDelete/></p>
        </div>


    </div>
  )
}

export default Menubar
