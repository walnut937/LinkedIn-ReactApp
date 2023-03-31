import { Avatar } from '@mui/material'
import React from 'react'
import FeedOption from './FeedOption'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import SendIcon from '@mui/icons-material/Send';
function Post({name, message, photourl, year, desc}) {
  return (
    <>
        <div className="post mt-3 bg-white p-3 flex flex-col gap-4 rounded-md border-[1px] border-gray-300">
            <div className="post_header flex gap-2">
                <Avatar/>
                <div className="post_info flex flex-col gap-0 text-xs">
                    <h1 className='text-slate-700 font-semibold text-sm'>{name}</h1>
                    <h1 className='text-gray-400'>{desc} &middot; <span>{year} {year > 1 ? 'years': 'year'}</span></h1>
                </div>
            </div>

            <div className="post_body">
                <h1 className='text-sm'>{message}</h1>
            </div>

            <div className="buttons flex items-center gap-2">
            <FeedOption title='Like' Icon={ThumbUpOutlinedIcon} Color='gray'/>
            <FeedOption title='Comment' Icon={CommentOutlinedIcon} Color='gray'/>
            <FeedOption title='Repost' Icon={AutorenewOutlinedIcon} Color='gray'/>
            <FeedOption title='Send' Icon={SendIcon} Color='gray'/>
            </div>
        </div>
    </>
  )
}

export default Post  