import React, { useContext } from 'react'
import { MdOutlineFileDownload } from 'react-icons/md'
import { RiStarFill } from 'react-icons/ri'
import { AppContext } from '../../context/AuthContext'
export default function InstallApp({installApp}) {
    const {id,title,image,downloads,ratingAvg,size}=installApp || {}
    const {handleUinstallApp}=useContext(AppContext)
    return (
        <div>
            <div className='bg-[#ffffff] p-4 shadow-lg rounded-xs flex justify-between items-center'>
                <div className='flex items-start gap-5'>
                    <img className='w-26 h-26 rounded-xs' src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="apps" />
                    <div>
                        <h1 className='text-xl font-medium text-[#001931]'>{title}</h1>
                        <p className='flex mt-2  items-center gap-3'><span className='text-[#00D390] flex items-center gap-1'><MdOutlineFileDownload /> {downloads}</span> <span className='text-[#FF8811] flex items-center gap-1'><RiStarFill />{ratingAvg}</span> <span className='text-[#00D390]'>{size} MB</span></p>
                    </div>
                </div>
                <div>
                    <button onClick={()=>handleUinstallApp(id)} className='bg-[#00D390] text-white btn px-4 font-semibold'>Uninstall</button>
                </div>
            </div>

        </div>
    )
}
