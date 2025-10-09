import React, { useContext } from 'react'

import { AppContext } from '../../context/AuthContext'
import InstallApp from './InstallApp'

export default function Installationpage() {
  const { installApps } = useContext(AppContext)
  return (
    <div className='max-w-[1400px] mx-auto px-10 pt-12 pb-10'>
      <div className='text-center'>
        <h1 className='text-[##001931] font-bold text-[48px]'>Your Installed Apps</h1>
        <p className='text-[#00D390] text-xl'>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div>
        <div className='mt-6'>
          <div className='flex justify-between items-center '>
            <h1 className='text-2xl text-[#001931] font-semibold'>{installApps?.length} Apps Found</h1>
            <select defaultValue="Pick a color" className="select w-34 text-[#00D390] text-[16px] ">
              <option >Sort By Size</option>
              <option>Low Size</option>
              <option>Heigh Size</option>
            </select>
          </div>
          <div className='mt-5 space-y-4'>
            {
             installApps.length>0? installApps.map((installApp,index)=><InstallApp key={index} installApp={installApp}></InstallApp>):<div className='h-40 flexl justify-center items-center flex-col'>
              <h1 className='text-4xl text-center font-semibold '>Not Found Apps</h1>
             </div>
            }
          </div>
        </div>
      </div>

    </div>
  )
}
