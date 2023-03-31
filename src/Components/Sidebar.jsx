import { Avatar } from '@mui/material'
import React from 'react'
import banner from '../Assets/avatar-banner.jpg'
import img1 from '../Assets/me.jpg'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
function Sidebar({}) {
    // recentItems
    const recentItems = (value) =>(
        <div className="sidebar_bottom_value gap-2 flex items-center text-gray-400 text-sm cursor-pointer hover:text-slate-900 transition duration-300">
            <h1>#</h1>
            <p>{value}</p>
        </div>
    );
  return (
    <>
    <div className='sidebar flex-[0.3]  sticky top-[78px] h-fit text-center'>
        <div className='sidebar-top flex border-[1px] border-gray-300 flex-col items-center bg-white rounded-t-md  border-b-[1px]'>
            <img src={banner} className='-mb-5 w-full h-16 object-cover rounded-t-md' alt="" />
            <Avatar src={img1} className='sidebar-avatar mb-1 mx-auto'/>
            <h1 className='font-bold mb-2'>Aditya Panda</h1>
            <h1 className='text-sm mb-1 text-gray-400 px-3'>Student at Netaji Subhash Engineering College</h1>
        </div>
        <div className='sidebar-connections  bg-white text-left p-3 text-xs  border-[1px] border-gray-300 border-t-0'>
            <div className="flex items-center justify-between p-1 px-2 rounded-md hover:bg-gray-200 cursor-pointer">
                <div>
                    <h1>Connections</h1>
                    <h1>Connect with Alumni</h1>
                </div>
                <div>
                    <PersonAddIcon/>
                </div>
            </div>
        </div>
        <div className="sidebar-premium bg-white text-left p-3 text-xs border-[1px] border-gray-300 border-t-0 hover:bg-gray-200">
            <div className="flex flex-col gap-2 px-1">
            <h1 className='text-gray-500 pl-2'>Acess Exclusive tools & insights</h1>
            <h1><WorkspacePremiumIcon/> <span className='underline hover:text-blue-400'><a href="/">Try premium for free</a></span></h1>
            </div>
        </div>
        <div className="my-items bg-white text-left p-3 text-xs rounded-b-md mb-3 border-[1px] border-gray-300 border-t-0 hover:bg-gray-200">
            <div className='flex items-center hover:bg-gray-200 gap-2 p-1'>
            <BookmarkIcon/>
            <h1>My Items</h1>
            </div>
        </div>
        <div className='Sidebar__bottom p-3 text-left bg-white rounded-md border-[1px] border-gray-300 '>
            <p className='mb-3 font-semibold'>Recent</p>
            {recentItems('Programming')}
            {recentItems('Software')}
            {recentItems('Developer')}
            {recentItems('ReactJS')}
        </div>
    </div>
    </>
  )
}

export default Sidebar