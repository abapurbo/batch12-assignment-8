import React, { useEffect, useState } from 'react'
import { IoMdDownload } from 'react-icons/io'
import { IoStar } from 'react-icons/io5'
import { MdOutlineFileDownload } from 'react-icons/md'
import { useLoaderData, useParams } from 'react-router'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LabelList } from 'recharts';
const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },]
export default function Details() {
  const [currentApp, setCurrentApp] = useState({})
  console.log(currentApp)
  const { id } = useParams()
  const datas = useLoaderData()
  useEffect(() => {
    const DetailsApp = datas.find(data => data.id == id);
    setCurrentApp(DetailsApp)

  }, [])

  const { image, ratingAvg, ratings, description, downloads, title, companyName, reviews, size } = currentApp

  return (
    <div className='max-[1400px] px-10 py-16 '>
      <div>
        <div className='flex gap-10'>
          <div className='w-[330px] '>
            <img className='w-[100%] h-[100%] object-container rounded-xl' src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' alt="apps image" />
          </div>
          <div className='flex-1'>
            <h1 className='text-[#001931] text-[32px] font-bold '>{title}</h1>
            <p className='mb-6 mt-2 text-[#632EE3] font-semibold'><span className='text-[#627382] text-xl font-[400]'>Developed by</span> {companyName}</p>
            <hr className='border border-gray-300' />
            <div className='flex gap-6 mt-6'>
              <div className='flex flex-col justify-start items-start gap-2'>
                <MdOutlineFileDownload className=' text-5xl text-[#54CF68]' />
                <p className='text-[#001931] text-[16px]'>Downloads</p>
                <h1 className='text-[#001931] text-[48px] font-extrabold'>{downloads}</h1>

              </div>
              <div className='flex flex-col justify-start items-start gap-2'>
                <IoStar className='text-[#FF8811] text-5xl' />
                <h1 className='text-[#001931] text-[16px]'>Average Ratings</h1>
                <p className='text-[#001931] text-[48px] font-extrabold'>{ratingAvg}</p>
              </div>
              <div className='flex flex-col justify-start items-start gap-2'>
                <img width='48px' src="../src/assets/icon-review.png" alt="review icon" />
                <h1 className='text-[#001931] text-[16px]'>Total Reviews</h1>
                <p className='text-[#001931] text-[48px] font-extrabold'>{reviews / 1000}K</p>
              </div>
            </div>
            <button className='bg-[#00D390] text-white text-xl font-semibold btn border-none'>Install Now ({size} MB)</button>
          </div>

        </div>
      </div>
      <hr className='my-12 text-[#001931]' />
      <div className='mt-10'>
        <h1 className='text-[#001931] font-semibold text-2xl'>Ratings</h1>
        <BarChart width={800} height={280} data={ratings} layout='vertical' margin={{ top: 20, right: 40, }}>
          <XAxis type='number' axisLine={false} tickLine={false} />
          <YAxis dataKey="name" type="category" reversed={true} axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="count" fill="#FF8811" barSize={30} />

        </BarChart>
      </div>
      <hr className='my-12 text-[#001931]' />
      <div className='my-10'>
        <h1 className='text-[#001931] font-semibold text-2xl'>Description</h1>
        <p className='text-xl text-[#627382] text-justify mt-4'>{description}</p>
      </div>
    </div>
  )
}
