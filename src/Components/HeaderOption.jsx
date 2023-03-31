import React from 'react'
import {Avatar} from '@mui/material'
function HeaderOption({Icon, title, avatar}) {
  return (
    <>
        <div className='header__Option flex  flex-col items-center text-gray-500 cursor-pointer hover:text-slate-800 transition duration-300'>
            {Icon && <Icon className='headerOption_Icon'/>}
            {avatar && <Avatar className='avatar object-contain' src={avatar} />}
            <h3 className='headerOption_title text-sm'>{title}</h3>
        </div>
    </>
  )
}

export default HeaderOption