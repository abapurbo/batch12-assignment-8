import React, { useContext, useEffect, useState } from 'react'
import { IoMdDownload } from 'react-icons/io'
import { IoStar } from 'react-icons/io5'
import { MdOutlineFileDownload } from 'react-icons/md'
import { useLoaderData, useParams } from 'react-router'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { AppContext } from '../../context/AuthContext'
import { getStorageApps } from '../../utilites/InstallationLocalStorage'
export default function Details() {
  const [currentApp, setCurrentApp] = useState({})
  const { handleAddApps, installApps } = useContext(AppContext)
  const [btnInActive, setBtnInActive] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { id } = useParams()
  const datas = useLoaderData()

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getFontSize = () => {
    if (windowWidth < 480) return 10;
    if (windowWidth < 768) return 10;
    return 20;
  };
  useEffect(() => {
    const DetailsApp = datas.find(data => data.id == id);
    setCurrentApp(DetailsApp)

  }, [])

  useEffect(() => {
    const checkApp = installApps.some(localApp => localApp.id == id);
    if (checkApp) {
      setBtnInActive(true)
    }
  }, [id, installApps]);


  const { image, ratingAvg, ratings, description, downloads, title, companyName, reviews, size } = currentApp

  return (
    <div className='max-[1400px] md:px-10 px-6 py-16 '>
      <div>
        <div className='flex flex-col md:flex-row gap-10'>
          <div className='w-[330px] '>
            <img className='w-[100%] h-[100%] object-container rounded-xl' src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' alt="apps image" />
          </div>
          <div className='flex-1'>
            <h1 className='text-[#001931] text-[32px] font-bold '>{title}</h1>
            <p className='mb-6 mt-2 text-[#632EE3] font-semibold'><span className='text-[#627382] text-xl font-[400]'>Developed by</span> {companyName}</p>
            <hr className='border border-gray-300' />
            <div className='flex flex-col md:flex-row md:gap-6 gap-4 mt-6'>
              <div className='flex flex-col justify-start items-start gap-2'>
                <MdOutlineFileDownload className=' text-5xl text-[#54CF68]' />
                <p className='text-[#001931] text-[16px]'>Downloads</p>
                <h1 className='text-[#001931] text-[48px] font-extrabold'>{downloads / 1000000}M</h1>

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
            <button
              disabled={btnInActive}
              onClick={() => handleAddApps(currentApp)}
              className={`bg-[#05db97] text-white text-xl font-semibold px-5 py-2 rounded-[6px] border-none disabled:bg-[#05db97]/60 disabled:text-white/90 disabled:cursor-not-allowed
  `}
            >
              {btnInActive ? 'Installed' : `Install Now (${size} MB)`}
            </button>

          </div>

        </div>
      </div>
      <hr className='my-12 text-[#001931]' />
      <div className='mt-10'>
        <h1 className='text-[#001931] font-semibold text-2xl'>Ratings</h1>
        <div className='md:w-[800px] w-[100%] '>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              data={ratings}
              layout="vertical"
              margin={{ top: 20, right: 40 }}
            >
              <XAxis type="number" axisLine={false} tickLine={false}    tick={{
                  fill: "#374151",      
                  fontSize: getFontSize(),
                  fontWeight: 500,
                }}/>
              <YAxis
                dataKey="name"
                type="category"
                reversed={true}
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#374151",      
                  fontSize: getFontSize(),
                  fontWeight: 500,
                }}
              />
              <Tooltip contentStyle={{ fontSize: getFontSize(), borderRadius: "8px" }} />
              <Bar dataKey="count" fill="#FF8811" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <hr className='my-12 text-[#001931]' />
      <div className='my-10'>
        <h1 className='text-[#001931] font-semibold text-2xl'>Description</h1>
        <p className='text-xl text-[#627382] text-justify mt-4'>{description}</p>
      </div>
    </div>
  )
}
