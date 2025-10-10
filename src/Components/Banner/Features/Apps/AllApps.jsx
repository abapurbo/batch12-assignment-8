import React, { use, useContext, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
import AppCard from './AppCard'
import { IoIosSearch } from 'react-icons/io'
import { AppContext } from '../../../../context/AuthContext'

export default function AllApps() {
    const apps = useLoaderData()
    const { isLoading, setIsLoading } = useContext(AppContext)
    const [searchs, setSearch] = useState([...apps])
    useEffect(() => {
         
            setIsLoading(false);
        
    }, [apps]);

    const handleSearchApps = (e) => {
        const searchText = e.target.value;
        setIsLoading(true);

        setTimeout(() => {
            const searchApps = apps.filter(app => app?.title.toLowerCase().includes(searchText));
            setSearch(searchApps);
            setIsLoading(false);
        }, 200);
    }
    return (
        <div className='mx-auto max-w-[1400px] md:px-10 px-6 py-10'>
            <div>
                <h1 className='text-[#001931] text-center md:text-[48px] text-3xl font-bold'>Our All Applications</h1>
                <p className='text-xl text-[#627382] text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center mt-10'>
                <h1 className='md:text-2xl text-[15px] text-[#001931] font-semibold'>({apps?.length}) Apps Found</h1>

                <fieldset className="input md:w-auto w-50 focus-within:outline-0 border-gray-300">
                    <IoIosSearch className='text-2xl text-[#627382]' />
                    <input type="text" className='placeholder:text-[#07f2a7] text-black outline-none text-[16px]' onChange={handleSearchApps} placeholder="Search Your Apps" />
                </fieldset>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-1  gap-6 mt-4'>

                {isLoading ? (
                    <div className='col-span-4 flex  w-[100%] items-center justify-center h-60'>
                        <div className='text-3xl text-gray-400 font-semibold  flex flex-row gap-3 items-center justify-center '><div className="flex flex-row items-center"><img
                            className="w-20 h-20 animate-[spin_1s_linear_infinite]"
                            src="https://i.ibb.co.com/1Jdj50b3/logo.png"
                            alt="Loading..."
                        /><h1>Loading....</h1></div></div>
                    </div>
                ) : searchs.length > 0 ? (
                    searchs.map(app => <AppCard key={app.id} app={app} />)
                ) : (
                    <div className='col-span-4 flex flex-col items-center justify-center h-60 '>
                        <h1 className='text-xl md:text-[40px] text-[30px] font-semibold text-gray-500'>No Apps Found</h1>
                        <p className='text-gray-400 md:text-xl text-[16px] mt-2 text-center'>Try searching with a different keyword.</p>
                    </div>
                )}



            </div>
        </div>
    )
}
