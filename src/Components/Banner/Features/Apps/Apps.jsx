import React from 'react'
import { IoMdStar } from 'react-icons/io'
import { RiDownload2Fill } from 'react-icons/ri'
import { Link } from 'react-router'

export default function Apps() {
    return (
        <div className='grid grid-cols-4 gap-6 '>
            <Link to={''} className="card cursor-pointer bg-base-100 w-[100%] h-[300px] max-w-[346px] max-h-[435px]  shadow-2xl p-3.5 transition hover:scale-95 duration-1000">
                <figure className='flex-1 '>
                    <img className='h-[100%] rounded-[10px]'
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className='mt-3'>
                    <h2 className="card-title md:text-[17px]">Forest: Focus for Productivity</h2>
                    <div className="card-actions justify-between mt-4">
                       <button className='flex items-center flex-row gap-1 text-[16px] text-[#00D390] font-medium bg-[#F1F5E8] px-3 py-1 rounded-[4px]'><RiDownload2Fill /> 9M</button>
                       <button className='flex items-center flex-row gap-1 text-[16px] text-[#FF8811] font-medium bg-[#FFF0E1] px-3 py-1 rounded-[4px]'><IoMdStar /> 5</button>
                    </div>
                </div>
            </Link>
            
            
          
        </div>
    )
}
