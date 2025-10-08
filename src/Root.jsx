import React from 'react'
import Navbar from './layout/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from './layout/Footer/Footer'
import './App.css'
export default function Root() {
  return (
    <div className='inter-font'>
      <div className='h-20 '>
        <Navbar></Navbar>
      </div>
      {/* daynamic content*/}
      <div className=' z-30 max-w-[1400px] mx-auto px-10 py-10'>
        <Outlet />
      </div>

      <div>
        <Footer></Footer>
      </div>

    </div>
  )
}
