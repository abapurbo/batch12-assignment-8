import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link, NavLink } from 'react-router'

export default function Navbar() {
    return (
        <div>
            <div className="navbar fixed z-50 bg-base-100 shadow-sm px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <div
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[16px] font-medium">
                            <NavLink to={'/'} className={({isActive})=>isActive ? 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-semibold underline decoration-[#9F62F2] underline-offset-4':''}>Home</NavLink>
                            <NavLink to={''} className={({isActive})=>isActive ? 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-semibold underline decoration-[#9F62F2] underline-offset-4':''}>Apps</NavLink>
                            <NavLink to={''} className={({isActive})=>isActive ? 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-semibold underline decoration-[#9F62F2] underline-offset-4':''}>Installation</NavLink>
                        </div>
                    </div>
                    <Link to='/' className="flex items-center font-bold gap-2 text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text"><img width='40px' height='40px' src="./src/assets/logo.png" alt="logo" />HERO.IO</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="menu menu-horizontal px-1 space-x-5 text-[16px] font-medium">
                        <NavLink to={'/'} className={({isActive})=>isActive ? 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-semibold underline decoration-[#9F62F2] underline-offset-4':''}>Home</NavLink>
                        <NavLink to={'/allApps'} className={({isActive})=>isActive ? 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-semibold underline decoration-[#9F62F2] underline-offset-4':''}>Apps</NavLink>
                        <NavLink to={'/installation'} className={({isActive})=>isActive ? 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-semibold underline decoration-[#9F62F2] underline-offset-4':''}>Installation</NavLink>
                    </div>
                </div>
                <div className="navbar-end">
                    <Link to='https://github.com/abapurbo' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[#ffffff] font-semibold"><FaGithub className='text-xl' />Contribute</Link>
                </div>
            </div>
        </div>
    )
}
