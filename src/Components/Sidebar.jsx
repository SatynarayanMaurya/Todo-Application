import React from 'react'
import profile from "../Assests/profile.jpeg"
import menu from "../Assests/menu1.png"
import menu11 from "../Assests/menu11.png"

import clock1 from "../Assests/clock1.png"
import clock11 from "../Assests/clock11.png"

import clock2 from "../Assests/clock2.png"
import clock22 from "../Assests/clock22.png"

import clock3 from "../Assests/clock3.png"
import clock33 from "../Assests/clock33.png"

import calender from "../Assests/calendar.png"
import { useSelector } from 'react-redux'

import { GoPlus } from "react-icons/go";
import iButton from "../Assests/i.png"

function Sidebar() {
  const lightMode = useSelector((state)=>state.toggleSlice.isLightMode);

  const pending = 70; 
  const done = 40;


  const percentage = (done / pending) * 100;

  // Set up SVG attributes for the circle
  const radius = 50; // radius of the circle
  const strokeWidth = 10; // stroke width
  const circumference = 2 * Math.PI * radius; // circumference of the circle

  // The offset is how much the stroke is reduced based on the percentage
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className={` flex items-center flex-col pb-3  ${!lightMode ? "bg-[#EEF6EF]" : "bg-[#2C2C2C]"}`}>

       {/* Image   */}
      <div className='flex flex-col gap-2 mt-4'>
            <img src={profile} alt="profile"  className='w-[100px] h-[100px] rounded-full object-cover'/>
            <p className='text-center'>Hi, Satya</p>
      </div>

        {/* list  */}
      <div className={`flex flex-col gap-3 mt-3  w-10/12  rounded-lg py-3 ${!lightMode ? "bg-white text-black" : "bg-black text-white"}`}>

            <div className='flex gap-2 items-center cursor-pointer pl-5'>
                {
                  !lightMode ?  <div><img src={menu} alt="" width={20}/></div> : <div> <img src={menu11} alt="" width={20}/></div>
                }
                <p className=''>All Todos</p>
            </div>

            <div className='flex gap-2 items-center cursor-pointer bg-[#ddeedf] rounded-lg pl-5  py-1'>
                {
                    !lightMode ?  <div><img src={calender} alt="" width={20}/></div> : <div> <img src={calender} alt="" width={20}/></div>
                }
                <p className="text-black">Today</p>
            </div>

            <div className='flex gap-2 items-center cursor-pointer pl-5'>
              {
                !lightMode ?  <div><img src={clock1} alt="" width={20}/></div> : <div> <img src={clock11} alt="" width={20}/></div>
              }
              
                <p className=''>Important</p>
            </div>

            <div className='flex gap-2 items-center cursor-pointer pl-5'>
                {
                  !lightMode ?  <div><img src={clock2} alt="" width={20}/></div> : <div> <img src={clock22} alt="" width={20}/></div>
                }
                <p className=''>Planned</p>
            </div>

            <div className='flex gap-2 items-center cursor-pointer pl-5'>
                {
                  !lightMode ?  <div><img src={clock3} alt="" width={20}/></div> : <div> <img src={clock33} alt="" width={20}/></div>
                }
                <p className=''>Assigned to me</p>
            </div>
      </div>

        {/* Add list  */}
      <div className={`w-10/12 pl-5 rounded-lg py-3 ${!lightMode ? "bg-white text-black" : "bg-black text-white"} mt-2`}>
              <div className='flex gap-2 items-center '>
                <p className='text-3xl'><GoPlus/></p>
                <p>Add List</p>
              </div>
      </div>

        {/* completed task */}
      <div className={`w-10/12 pl-5 pr-4 rounded-lg py-2 ${!lightMode ? "bg-white text-black" : "bg-black text-white"} mt-2`}>
        
            <div className='flex justify-between'>
                  <div className='flex flex-col gap-1'>
                    <p className='font-semibold'>Today Tast</p>
                    <p>11</p>
                  </div>

                  <div>
                      <img src={iButton} alt="" />
                  </div>
            </div>
                
                {/* Circle  */}
            <div>
                  <svg width="120" height="120" viewBox="0 0 120 120">
                    {/* Background Circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      stroke={`${!lightMode ? "black" :"red"}`}
                      strokeWidth={strokeWidth}
                      fill="transparent"
                    />
                    {/* Completed Circle (Green part) */}
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      stroke="green"
                      strokeWidth={strokeWidth}
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      transform="rotate(-90 60 60)" // Rotate so it starts from the top
                    />
                  </svg>
            </div>

                {/* Pending and done part  */}
            <div className='flex gap-6 mt-2'>
                <div className='flex gap-2 items-center'>
                  <p className='w-3 h-3 bg-green-600 rounded-full'></p>
                  <p>Pending</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <p className={`w-3 h-3 ${!lightMode? "bg-black" : "bg-red-600"} rounded-full`}></p>
                  <p>Done</p>
                </div>
            </div>
      </div>

    </div>
  )
}

export default Sidebar
