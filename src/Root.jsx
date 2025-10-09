import React from 'react'
import Navbar from './layout/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from './layout/Footer/Footer'
import './App.css'
import { ToastContainer } from 'react-toastify'
export default function Root() {
  return (
    <div className='inter-font'>
      <div className='h-[66px]'>
        <Navbar></Navbar>
      </div>
      {/* daynamic content*/}
      <div className='z-30 bg-[#f9f9f9] '>
        <Outlet />
      </div>

      <div>
        <Footer></Footer>
      </div>
      <ToastContainer />
    </div>
  )
}
