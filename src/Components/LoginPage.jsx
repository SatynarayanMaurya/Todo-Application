import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

function LoginPage() {
    const navigate = useNavigate()
    const [email, setEmail ] = useState("")
    const [password,setPassword]= useState("");
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log("email is : ", email);
        if(email.trim() === "" || password.trim() === ""){
            alert("Enter valid email and Password");
            return;
        }
        // console.log("email is : ", password);
        localStorage.setItem("email",email);
        navigate("/todos")
        
    }
  return (
    <div className='flex lg:flex-row flex-col gap-4 lg:gap-0 lg:justify-between w-10/12 lg:w-7/12 mx-auto items-center mt-20  lg:mt-8 h-[85vh] '>
      <img src="https://cdn-icons-png.freepik.com/256/8476/8476658.png?semt=ais_hybrid" className='lg:w-[350px]'  alt="" />

      <div className='lg:w-[400px] lg:px-8 px-2 py-6 rounded-lg  flex flex-col gap-2'>

        <h1 className='text-3xl font-semibold'>Login to Create Todo</h1>
        <p className=' font-semibold mt-2'>Enter your details below</p>
          <form action="" onSubmit={handleSubmit} className='mt-6 flex flex-col gap-6'>

                <div>
                  <input type="email" value={email} name='email' onChange={(e)=>setEmail(e.target.value)}  id='email' placeholder='Email'  className=' outline-none border-b border-black border-l-none border-r-none border-t-none px-2 py-1  w-full'/>
                </div>

                <div>
                  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name='password' id='password' placeholder='Password'  className=' outline-none border-b border-black border-l-none border-r-none border-t-none px-2 py-1 pr-12  w-full'/>
                </div>

                <div className='flex justify-between items-center mt-2'>
                    <button type='submit' className='bg-[#fb641b] px-4 py-2 rounded-lg text-white'>Login</button>
                    <button className='text-[#fb641b]'>Forgot Password?</button>
                </div>
          </form>

          <button className='text-start mt-3 text-blue-600 ' >Create an account</button>
      </div>

    </div>
  )
}

export default LoginPage
