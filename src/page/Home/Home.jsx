import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Apps from '../../Components/Banner/Features/Apps/Apps'

export default function Home() {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <h1 className='text-center text-[#001931] font-bold text-[46px]'>Trending Apps</h1>
        <p className='text-[#627382] text-xl text-center'>Explore All Trending Apps on the Market developed by us</p>
        <div className='mt-10 max-w-[1400px] mx-auto px-10 '>
             <Apps></Apps>
        </div>
      </div>
    </div>
  )
}
