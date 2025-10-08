import React from 'react'
import { MdOutlineFileDownload } from 'react-icons/md'
import { RiStarFill } from 'react-icons/ri'

export default function Installationpage() {
  return (
    <div className='max-w-[1400px] mx-auto px-10 pt-12 pb-10'>
      <div className='text-center'>
        <h1 className='text-[##001931] font-bold text-[48px]'>Your Installed Apps</h1>
        <p className='text-[#00D390] text-xl'>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div>
        <div className='mt-6'>
          <div className='flex justify-between items-center '>
            <h1 className='text-2xl text-[#001931] font-semibold'>1 Apps Found</h1>
            <select defaultValue="Pick a color" className="select w-32 text-[#00D390] text-[16px] ">
              <option >Sort By Size</option>
              <option>Low Size</option>
              <option>Heigh Size</option>
            </select>
          </div>
          <div className='mt-5 space-y-4'>
            <div className='bg-[#ffffff] p-4 shadow-lg rounded-xs flex justify-between items-center'>
              <div className='flex items-start gap-5'>
                <img className='w-26 h-26 rounded-xs' src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="apps" />
                <div>
                  <h1 className='text-xl font-medium text-[#001931]'>Forest: Focus for Productivity</h1>
                  <p className='flex mt-2  items-center gap-3'><span className='text-[#00D390] flex items-center gap-1'><MdOutlineFileDownload /> 9M</span> <span className='text-[#FF8811] flex items-center gap-1'><RiStarFill /> 5</span> <span className='text-[#00D390]'>258 MB</span></p>
                </div>
              </div>
              <div>
                <button className='bg-[#00D390] text-white btn px-4 font-semibold'>Uninstall</button>
              </div>
            </div>
            <div className='bg-[#ffffff] p-4 shadow-lg rounded-xs flex justify-between items-center'>
              <div className='flex items-start gap-5'>
                <img className='w-26 h-26 rounded-xs' src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="apps" />
                <div>
                  <h1 className='text-xl font-medium text-[#001931]'>Forest: Focus for Productivity</h1>
                  <p className='flex mt-2  items-center gap-3'><span className='text-[#00D390] flex items-center gap-1'><MdOutlineFileDownload /> 9M</span> <span className='text-[#FF8811] flex items-center gap-1'><RiStarFill /> 5</span> <span className='text-[#00D390]'>258 MB</span></p>
                </div>
              </div>
              <div>
                <button className='bg-[#00D390] text-white btn px-4 font-semibold'>Uninstall</button>
              </div>
            </div>
            <div className='bg-[#ffffff] p-4 shadow-lg rounded-xs flex justify-between items-center'>
              <div className='flex items-start gap-5'>
                <img className='w-26 h-26 rounded-xs' src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="apps" />
                <div>
                  <h1 className='text-xl font-medium text-[#001931]'>Forest: Focus for Productivity</h1>
                  <p className='flex mt-2  items-center gap-3'><span className='text-[#00D390] flex items-center gap-1'><MdOutlineFileDownload /> 9M</span> <span className='text-[#FF8811] flex items-center gap-1'><RiStarFill /> 5</span> <span className='text-[#00D390]'>258 MB</span></p>
                </div>
              </div>
              <div>
                <button className='bg-[#00D390] text-white btn px-4 font-semibold'>Uninstall</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
