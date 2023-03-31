import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import FeedOption from './FeedOption'
import WidgetOption from './WidgetOption';
function Widgets() {
  return (
    <>
    <div className='flex-[0.3] bg-white rounded-md h-fit p-2 sticky top-[78px] border-[1px] border-gray-300'>
      <div className='flex items-center justify-between'>
      <h1 className='text-lg font-bold'>LinkedIn News </h1>
      <FeedOption Icon={InfoIcon}/>
      </div>
      <div className='mb-3'>
        <div className='flex flex-col gap-3'>
        <WidgetOption text='Demand for office space soars' day='1d' readers='762'/>
        <WidgetOption text='Shorter wait for US visas' day='1d' readers='7624'/>
        <WidgetOption text='Alibaba to split, ready spinoffs' day='1d' readers='7644'/>
        <WidgetOption text='Decoding changes to UPI' day='1d' readers='234'/>
        </div>
      </div>
      <div className="footer bg-white rounded-md p-3">

      </div>
    </div>
    </>
  )
}

export default Widgets