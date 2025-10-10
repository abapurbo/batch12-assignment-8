import React, { useContext, useEffect, useState } from 'react'
import Banner from '../../Components/Banner/Banner'
import Apps from '../../Components/Banner/Features/Apps/Apps'
import { Link } from 'react-router';
import { AppContext } from '../../context/AuthContext';
export default function Home() {
      const [cards, setCards] = useState([]);
      useEffect(() => {
          const fetchData = async () => {
              try {
                  const url = '/apps.json';
                  const res = await fetch(url);
                  const data = await res.json();
                  setCards(data);
                  setIsLoading(true)
              } catch (err) {
                  console.error('Failed to fetch apps:', err);
              }
          };
          fetchData();
      }, []);
  
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <h1 className='text-center text-[#001931] font-bold text-[46px]'>Trending Apps</h1>
        <p className='text-[#627382] text-xl text-center'>Explore All Trending Apps on the Market developed by us</p>
        <div className='mt-10 max-w-[1400px] mx-auto px-10 py-10'>
         {
          <Apps cards={cards}></Apps>
         }
          <div className='text-center my-10'>
            <Link to="/allApps" className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[#ffffff] py-3.5 px-[39px] rounded-[4px] font-semibold text-[16px] transition hover:scale-95 cursor-pointer duration-700 '>Show All</Link>

          </div>
        </div>
      </div>
    </div>
  )
}
