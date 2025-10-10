import React from 'react'
import Navbar from '../../layout/Navbar/Navbar'
import Footer from '../../layout/Footer/Footer'
import { useNavigate } from 'react-router'

export default function Errorpage() {
  const navigate=useNavigate();
  const handleNavigate=()=>{
     navigate(-1)
  }
  return (
    <div>
      <div className='h-[66px]'>
        <Navbar></Navbar>
      </div>
      <div className='bg-[#f9f9f9] max-w-[1400px] mx-auto  px-10 pt-28 pb-14 flex flex-col items-center justify-center'>
        <img src="../src/assets/error-404.png" alt="error logo" />
        <div className='text-center'>
          <h1 className='text-[#001931] md:text-[48px] text-2xl font-semibold'>Oops, page not found!</h1>
          <p className='text-[#627382] md:text-xl text-[16px] '>The page you are looking for is not available.</p>
          <button onClick={handleNavigate} className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[16px] mt-4 font-semibold text-white px-10'>Go Back!</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
