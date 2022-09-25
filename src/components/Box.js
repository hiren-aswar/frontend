import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
const Box = ({content}) => {
 
  return (
    <div >
        <div>
            <div className=' flex justify-between'>
                 <h1>{content}</h1>
                 <MdKeyboardArrowRight/>
            </div>
            <h1 className=' text-2xl font-bold '>15,000</h1>
        </div>
    </div>
  )
}

export default Box