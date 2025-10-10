import React, { useContext } from 'react'
import { Link } from 'react-router'
import { IoMdStar } from 'react-icons/io'
import { RiDownload2Fill } from 'react-icons/ri'
import { AppContext } from '../../../../context/AuthContext'

export default function AppCard({ app }) {
    const { id, image, title, downloads, ratingAvg } = app || {}
    console.log(image)
    return (
        <div>
            <Link  to={`/details/${id}`} className="card cursor-pointer bg-base-100 w-[100%]  max-w-[346px] h-[350px]  shadow-xl p-3.5 transition hover:scale-95 duration-500">
                <figure>
                    <img className='rounded-[10px] w-[100%] h-[200px] max-h-[450px] object-container'
                        src={app?.image}
                        alt="Shoes" />
                </figure>

                <div className='flex-1 mt-3'>
                    <h2 className="card-title">{title}</h2>
                </div>
                <div className="card-actions justify-between mt-4 ">
                    <button className='flex items-center flex-row gap-1 text-[16px] text-[#00D390] font-medium bg-[#F1F5E8] px-3 py-1 rounded-[4px]'><RiDownload2Fill /> {downloads / 1000000}M</button>
                    <button className='flex items-center flex-row gap-1 text-[16px] text-[#FF8811] font-medium bg-[#FFF0E1] px-3 py-1 rounded-[4px]'><IoMdStar />{ratingAvg}</button>
                </div>

            </Link>

        </div>
    )
}
