import React from 'react'
import {FiBarChart2} from 'react-icons/fi'
const Heading = () => {
  return (
    <div>
        <div className="heading mt-16 text-sm flex items-center gap-6">
                    <FiBarChart2 className=' text-buyer-primary font-bold graph' size={60}/>
                    <div>
                      <p className=' font-medium'>Total Enquries</p>
                      <h1 className=' font-bold text-4xl'>15,000</h1>
                    </div>
                </div>
    </div>
  )
}

export default Heading