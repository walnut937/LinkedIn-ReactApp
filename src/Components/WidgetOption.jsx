import React from 'react'
function WidgetOption({text, readers, day}) {
  return (
    <>
        <div className=''>
            <div className='flex items-center gap-1'>
            <div className='text-xs text-gray-500'>#</div>
            <div className='text-sm font-medium'>{text}</div>
            </div>
            <h1 className='pl-[15px] text-xs text-gray-500'>{day} ago &middot; {readers} readers</h1>

        </div>
    </>
  )
}

export default WidgetOption