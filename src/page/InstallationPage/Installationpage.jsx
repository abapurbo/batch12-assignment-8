import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AuthContext'
import InstallApp from './InstallApp'
import { getStorageApps } from '../../utilites/InstallationLocalStorage';

export default function Installationpage() {
  const { installApps} = useContext(AppContext)
  const [sortOrder, setSortOrder] = useState("Sort By Size");
  const [sortedApps, setSortedApps] = useState([])

  useEffect(() => {
    const localInstallApps = getStorageApps()

    let sorted = []
    if (sortOrder === 'High-Low') {
      sorted = [...localInstallApps].sort((a, b) => b.downloads - a.downloads)
    } else if (sortOrder === 'Low-High') {
      sorted = [...localInstallApps].sort((a, b) => a.downloads - b.downloads)
    } else {
      sorted = localInstallApps
    }

    setSortedApps(sorted)

  }, [sortOrder])

  return (
    <div className='max-w-[1400px] mx-auto md:px-10 px-6 pt-12 pb-10'>
      <div className='text-center'>
        <h1 className='text-[#001931] font-bold lg:text-[48px] text-3xl'>Your Installed Apps</h1>
        <p className='text-[#00D390] md:text-xl text-[14px]'>Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className='mt-6'>
        <div className='flex justify-between items-center'>
          <h1 className='lg:text-2xl text-xl text-[#001931] font-semibold'>
            {sortedApps?.length} Apps Found
          </h1>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select w-34  text-[#00D390] lg:text-[16px] text-xs"
          >
            <option value='Sort By Size'>Sort By Size</option>
            <option value='High-Low'>High-Low</option>
            <option value='Low-High'>Low-High</option>
          </select>
        </div>

        <div className='mt-5 space-y-4'>
          { sortedApps.length > 0 ? (
            sortedApps.map((sortedApp, index) => (
              <InstallApp key={index} sortedApp={sortedApp} />
            ))
          ) : (
            <div className='h-40 flex justify-center items-center flex-col'>
              <h1 className='text-4xl text-center font-semibold'>Not Found Apps</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
