import React from 'react';
import { Link } from 'react-router';

export default function Banner() {
    return (
        <div className="pt-20 ">
           <div className='px-6'>
             <h1 className="text-[#001931] lg:text-[72px] text-[40px] text-center font-bold lg:leading-[88px] leanding-[10px]">
                <span>We Build</span><br />
                <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-black">
                    Productive
                </span>{' '}
                Apps
            </h1>
         
                <p className="md:text-xl text-[#627382] text-center md:w-[960px] p\ w-auto mx-auto mt-4">
                At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
               
                Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
           </div>
        
            <div className='flex flex-col items-center mt-8'>
                <div className='flex md:flex-row flex-col gap-4'>
                    <Link to='https://play.google.com/store/games?hl=en' className='flex items-center text-xl flex-row font-semibold text-[#001931] border-1 px-2 gap-1 border-[#D2D2D2] rounded-[5px]'><img width='40px' height='40px' src="./src/assets/play-store.png" alt="play store" /><span>Google Play</span></Link>
                    <Link to='https://developer.apple.com/app-store/marketing/guidelines/' className='flex items-center text-xl flex-row font-semibold text-[#001931] border-1 px-2 gap-3 border-[#D2D2D2] rounded-[5px]'><img width='30px' height='30px' src="./src/assets/app-store.png" alt="play store" /><span>Google Play</span></Link>
                </div>
            </div>
            <div className="mt-10 bg-[url('../src/assets/hero.png')] lg:bg-[length:600px] bg-[length:300px_auto]  lg:h-80 h-42  bg-no-repeat bg-center ">

            </div>
            <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  -mt-2 py-20 md:px-20 mb-10">
                <h1 className='md:text-[46px] text-4xl font-bold text-[#ffffff] text-center '>Trusted by Millions, Built for You</h1>
                <div className='text-[#ffffff] flex flex-col space-y-10 md:justify-around max-w-[1400px] mx-auto md:mt-10 mt-6'>
                    <div className='text-center space-y-2'>
                        <h1 className='text-[16px]'>Total Downloads</h1>
                        <h1 className='text-[64px] font-extrabold '>29.6M</h1>
                        <h1 className='text-[16px]'>21% more than last month</h1>
                    </div>
                    <div className='text-center space-y-2'>
                        <h1 className='text-[16px]'>Total Reviews</h1>
                        <h1 className='text-[64px] font-extrabold '>906K</h1>
                        <h1 className='text-[16px]'>46% more than last month</h1>
                    </div>
                    <div className='text-center space-y-2'>
                        <h1 className='text-[16px]'>Active Apps</h1>
                        <h1 className='text-[64px] font-extrabold '>132+</h1>
                        <h1 className='text-[16px]'>31 more will Launch</h1>
                    </div>
                </div>

            </div>
        </div>
    );
}
