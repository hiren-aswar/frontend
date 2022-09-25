import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

import {AiOutlineLineChart} from 'react-icons/ai'
import {BiLineChartDown} from 'react-icons/bi'
// import Avatar from '@mui/material/Avatar';


const BuyerBox = ({ color, icon, icon_set ,growth }) => {
  return (
    <div className='box_shadow border flex flex-col p-4 bg-white rounded-md'>
      <div className="icon_box flex justify-between">
        <img className={`${icon_set}`} src={icon} alt="" srcSet="" />
        <div>
          <div className="mt-3 flex -space-x-2 overflow-hidden">
          {/* <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" /> */}
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
        </div>
      </div>
      <div className="heading my-2">
        <h1 className=' my-2 text-2xl'>Rs 123456</h1>
        <h2 className=' text-sm font-medium text-buyer-small_heading '>Total Purchase</h2>
      </div>
      <div className={`growth ${color} flex justify-around items-center px-2 w-full gap-2 mx-auto my-4 border py-1 rounded-md text-sm`}>
        <span className="span_1">12%</span>
        <span className="span_2">12% from last 1 week</span>
        {
          growth ?
          <AiOutlineLineChart size={18} />
          :
          <BiLineChartDown size={18} />
        }
       
      </div>
      <div className='flex items-center justify-end gap-2 text-end text-base font-medium capitalize'><a href="/" className=' text-buyer-know_more'>Know more</a>
        <BsFillArrowRightCircleFill size={16} />
      </div>
    </div>
  )
}

export default BuyerBox