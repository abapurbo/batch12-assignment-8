import React from 'react';
import { Link } from 'react-router';

export default function Banner() {
  return (
    <div className="mt-20">
      <h1 className="text-[#001931] text-[72px] text-center font-bold leading-[88px]">
        <span>We Build</span><br />
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-black">
          Productive
        </span>{' '}
        Apps
      </h1>
      <p className="text-xl text-[#627382] text-center mt-4">
        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
        <br />
        Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
      <div className='flex flex-col items-center mt-8'>
       <div className='flex gap-4'>
         <Link to='https://play.google.com/store/games?hl=en' className='flex items-center text-xl flex-row font-semibold text-[#001931] border-1 px-2 gap-1 border-[#D2D2D2] rounded-[5px]'><img width='40px' height='40px' src="./src/assets/play-store.png" alt="play store" /><span>Google Play</span></Link>
         <Link to='https://developer.apple.com/app-store/marketing/guidelines/' className='flex items-center text-xl flex-row font-semibold text-[#001931] border-1 px-2 gap-3 border-[#D2D2D2] rounded-[5px]'><img width='30px' height='30px' src="./src/assets/app-store.png" alt="play store" /><span>Google Play</span></Link>
       </div>
      </div>
    </div>
  );
}
