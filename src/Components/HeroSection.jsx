import React from 'react'
import Navbar from './Navbar'
import Mainbar from './Mainbar'
import Sidebar from './Sidebar'
import Menubar from './Menubar'
import { useSelector } from 'react-redux'

function HeroSection() {

    const sidebar = useSelector((state)=>state.toggleSlice.isSidebar);
    const menu = useSelector((state)=>state.toggleSlice.isMenu)
    const widt = sidebar ? (menu ? "57%" : "79%") : ( menu ? "77%" :"99%");
  return (
    <div>
            <Navbar/>

            <div className="w-11/12 mx-auto mt-2 flex justify-between relative">
                {
                sidebar &&
                <div className="md:w-[18%] w-[264px] sm:relative absolute">
                    <Sidebar/>
                </div>
                }

                <div  style={{ width: widt }}>
                <Mainbar/>
                </div>

                {
                menu &&
                <div className="md:w-[22%] w-[306px]  sm:relative absolute">
                    <Menubar/>
                </div>
                }
            </div>
    </div>
  )
}

export default HeroSection
