import React from 'react'

function FeedOption({title, Icon, Color}) {
  return (
    <>
        <div className='p-2 cursor-pointer flex items-center gap-2 hover:bg-gray-200 rounded-lg transition duration-600 hover:translate-y-1'>
            <Icon style={{color: Color}}/>
            <h1 className='text-gray-400 text-sm'><a href="/">{title}</a></h1>
        </div>
    </>
  )
}

export default FeedOption