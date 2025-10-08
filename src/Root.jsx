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
      <div className='h-[calc(100vh-80px)] z-30'>
        <Outlet />
      </div>

      <div>
        <Footer></Footer>
      </div>

    </div>
  )
}
