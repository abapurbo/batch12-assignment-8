
import Navbar from './layout/Navbar/Navbar'
import { Outlet, useNavigation } from 'react-router'
import Footer from './layout/Footer/Footer'
import './App.css'
import { ToastContainer } from 'react-toastify'
import { useContext, useEffect } from 'react'
import { AppContext } from './context/AuthContext'

export default function Root() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className='inter-font'>
      <div className='h-[66px]'>
        <Navbar></Navbar>
      </div>
      {/* daynamic content*/}
      <div className='z-30 bg-[#f9f9f9] '>
        <div>
          {isLoading ? <div className='h-dvh text-3xl text-gray-400 font-semibold  flex flex-row gap-3 items-center justify-center '><div className="flex flex-row items-center"><img
            className="w-20 h-20 animate-[spin_1s_linear_infinite]"
            src="../src/assets/logo.png"
            alt="Loading..."
          /><h1>Loading....</h1></div></div> : <Outlet />}

        </div>
      </div>

      <div>
        <Footer></Footer>
      </div>
      <ToastContainer />
    </div>
  )
}
