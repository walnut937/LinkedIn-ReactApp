import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GroupIcon from '@mui/icons-material/Group';
import GridOnIcon from '@mui/icons-material/GridOn';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import linkedInlogo from '../Assets/icons8-linkedin.svg' 
import myself from '../Assets/me.jpg' 
import HeaderOption from './HeaderOption';
function Header() {
  return (
    <>
        <div className='header flex justify-evenly border-b-[1px] bg-white border-gray-300 py-1 w-full sticky top-0 z-50'>
            <div className="header-left flex items-center">
                <img src={linkedInlogo} alt="" />
                <div className='header__search p-[10px] flex gap-3 items-center rounded-md text-gray-700 bg-[#eef3f8]'>
                    <SearchIcon/>
                    <input type="text" className='outline-none bg-[#eef3f8]' placeholder='Search' />
                </div>
            </div>
            <div className="header-right md:flex items-center gap-7 hidden">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={GroupIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={MessageIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption avatar={myself} title='Me'/>
                <HeaderOption Icon={GridOnIcon} title='For Business'/>
            </div>
        </div>
    </>
  )
}

export default Header