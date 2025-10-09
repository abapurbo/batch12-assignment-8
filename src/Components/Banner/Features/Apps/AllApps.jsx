import React, { use, useContext, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
import AppCard from './AppCard'
import { IoIosSearch } from 'react-icons/io'
import { AppContext } from '../../../../context/AuthContext'

export default function AllApps() {
    const apps = useLoaderData()
    const { isLoading, setIsLoading } = useContext(AppContext)
    const [searchs, setSearch] = useState([...apps])
    const handleSearchApps = (e) => {
        const searchText = e.target.value;
        setIsLoading(true);

        setTimeout(() => {
            const searchApps = apps.filter(app => app?.title.toLowerCase().includes(searchText));
            setSearch(searchApps);
            setIsLoading(false); // search complete
        }, 300);
    }
    return (
        <div className='mx-auto max-w-[1400px] px-10 py-10'>
            <div>
                <h1 className='text-[#001931] text-center text-[48px] font-bold'>Our All Applications</h1>
                <p className='text-xl text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center mt-10'>
                <h1 className='text-2xl text-[#001931] font-semibold'>({apps?.length}) Apps Found</h1>

                <fieldset className="input focus-within:outline-0 border-gray-300">
                    <IoIosSearch className='text-2xl text-[#627382]' />
                    <input type="text" className='placeholder:text-[#07f2a7] text-black outline-none text-[16px]' onChange={handleSearchApps} placeholder="Search Your Apps" />
                </fieldset>
            </div>
            <div className='grid grid-cols-4 gap-6 mt-4'>

                {isLoading ? (
                    <div className='col-span-4 flex  w-[100%] items-center justify-center h-60'>
                        <div className='text-3xl text-gray-400 font-semibold  flex flex-row gap-3 items-center justify-center '><div className="flex flex-row items-center"><img
                            className="w-20 h-20 animate-[spin_1s_linear_infinite]"
                            src="../src/assets/logo.png"
                            alt="Loading..."
                        /><h1>Loading....</h1></div></div>
                    </div>
                ) : searchs.length > 0 ? (
                    searchs.map(app => <AppCard key={app.id} app={app} />)
                ) : (
                    <div className='col-span-4 flex flex-col items-center justify-center h-60 '>
                        <h1 className='text-xl text-[40px] font-semibold text-gray-500'>No Apps Found</h1>
                        <p className='text-gray-400 text-xl mt-2'>Try searching with a different keyword.</p>
                    </div>
                )}



            </div>
        </div>
    )
}
