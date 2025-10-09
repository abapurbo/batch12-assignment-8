import React, { useContext, useEffect, useState } from 'react'

import { AppContext } from '../../context/AuthContext'
import InstallApp from './InstallApp'
import { getStorageApps } from '../../utilites/InstallationLocalStorage';

export default function Installationpage() {
  const { installApps } = useContext(AppContext)
  const [sortOrder, setSortOrder] = useState("Sort By Size");
  const [sortedApps, setSortedApps] = useState([...installApps])
  //Apps size high to low size in the sort
  useEffect(() => {
    const localInstallApps = getStorageApps()
    if (sortOrder === 'High-Low') {
      const highToLow = localInstallApps.sort((a, b) => {
        return b?.downloads - a?.downloads
      })
      setSortedApps(highToLow)
    }
    else if (sortOrder === 'Low-High') {
      const highToLow = localInstallApps.sort((a, b) => {
        return a?.downloads - b?.downloads
      })
      setSortedApps(highToLow)
    }
    else {
      setSortedApps(localInstallApps)
    }
  }, [sortOrder,installApps])

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
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="select w-34 text-[#00D390] text-[16px] ">
              <option value='Sort by Size'>Sort By Size</option>
              <option value='High-Low' onClick={(e) => setSortOrder(e.target.value)}>High-Low</option>
              <option value='Low-High' onClick={(e) => setSortOrder(e.target.value)}>Low-High</option>
            </select>
          </div>
          <div className='mt-5 space-y-4'>
            {
              sortedApps.length > 0 ? sortedApps.map((sortedApp, index) => <InstallApp key={index} sortedApp={sortedApp}></InstallApp>) : <div className='h-40 flexl justify-center items-center flex-col'>
                <h1 className='text-4xl text-center font-semibold '>Not Found Apps</h1>
              </div>
            }
          </div>
        </div>
      </div>

    </div>
  )
}
