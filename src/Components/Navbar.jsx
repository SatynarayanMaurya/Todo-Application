import React from 'react'
import { LuMenu } from "react-icons/lu";
import logo from "../Assests/logo.png"
import { CiSearch } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { MdLightMode } from "react-icons/md";   // black
// import { MdOutlineLightMode } from "react-icons/md";  // White
import { useDispatch, useSelector } from 'react-redux';
import { setLightMode, setMenu, setSidebar } from '../Redux/toggleSlice';
import darkMode from "../Assests/darkMode.png"
function Navbar() {

    const lightMode = useSelector((state)=>state.toggleSlice.isLightMode)
    const dispatch = useDispatch();
  return (
    <div className='border-b-[1px]'>

        <div className='flex justify-between items-center h-[55px] w-11/12 mx-auto '>
            
            <div className='flex gap-4 items-center'>
                <p className='text-3xl cursor-pointer' onClick={()=>dispatch(setSidebar())}><LuMenu/></p>
                <img src={logo} alt="logo" width={80} />
            </div>

            <div className='flex gap-6 text-2xl'>
                <p><CiSearch/></p>
                <p className='cursor-pointer' onClick={()=>dispatch(setMenu())}><BiCategory/></p>
                <div className='cursor-pointer' onClick={()=>dispatch(setLightMode())}>{lightMode ? <MdLightMode/>:<div><img src={darkMode} alt="darkMode" /></div>}</div>
            </div>

        </div>

    </div>
  )
}

export default Navbar
