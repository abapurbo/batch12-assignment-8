import React from 'react'
import { useLoaderData } from 'react-router'
import AppCard from './AppCard'
import { IoIosSearch } from 'react-icons/io'

export default function AllApps() {
    const apps = useLoaderData()
    return (
        <div>
            <div>
                <h1 className='text-[#001931] text-center text-[48px] font-bold'>Our All Applications</h1>
                <p className='text-xl text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center mt-10'>
                <h1 className='text-2xl text-[#001931] font-semibold'>({apps?.length}) Apps Found</h1>

                <fieldset className="input">
                    <IoIosSearch className='text-xl'/>
                    <input type="text"  placeholder="Search Your Apps" />
                </fieldset>
            </div>
            <div className='grid grid-cols-4 gap-6 mt-4'>
                {apps.map(app => (
                    <AppCard key={app.id} app={app} />
                ))}

            </div>
        </div>
    )
}
