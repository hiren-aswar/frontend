import React, { useEffect, useRef, useState } from 'react'
import Box from '../../components/Box'
import Header from '../../components/Header'
import Heading from '../../components/Heading'
import Bid from '../../components/Buyer/Bidding/Bid'
import SearchBox from '../../components/SearchBox'
// import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios'

const Bidding = () => {

    const [change, setChange] = useState(false)
    const [bids, setBids] = useState([])
    // const [load, setLoad] = useState(true)
    const [status, setStatus] = useState('processing')
    const content = useRef()
    const searchbar = useRef()


    // functions
    const status_proccess = () => {
        setStatus('processing')
    }
    const status_active = () => {
        setStatus('active')
    }
    const status_pending = () => {
        setStatus('pending')

    }
    const status_previous = () => {
        setStatus('previous')
    }


    useEffect(() => {
        const getdata = async () => {

            const { data } = await axios.get('/getall/buyer/bids')

            setBids(data.buyerbids.bids)



        }

        content.current.addEventListener('scroll', () => {
            var rect = searchbar.current.getBoundingClientRect();

            if (rect.top < 70) {
                setChange(true)
            }
            if (rect.top > 70) {
                setChange(false)
            }

        })
        getdata()



    }, [status])
    return (
        <div className=' flex-1'>
            <Header />
            <div className="flex">

                <div ref={content} className=' flex-1 px-14 py-8 space-y-7 overflow-y-scroll h-screen '>
                    <Heading />
                    <div className="box_cont flex gap-5">
                        <div className={` text-sm box_shadow border flex flex-col gap-2  bg-white box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'processing' && 'bg-buyer-primary text-white'} `} onClick={status_proccess}>
                            <Box content={'Processing'} />
                        </div>
                        <div className={` text-sm box_shadow border flex flex-col gap-2 bg-white box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'active' && 'bg-buyer-primary text-white'} `} onClick={status_active}>
                            <Box content={'Active'} />
                        </div>
                        <div className={` text-sm box_shadow border flex flex-col gap-2 bg-white box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'pending' && 'bg-buyer-primary text-white'} `} onClick={status_pending}>
                            <Box content={'Pending'} />
                        </div>
                        <div className={` text-sm box_shadow border flex flex-col gap-2 bg-white box_shadow rounded-lg py-3 cursor-pointer w-44 px-3 ${status === 'previous' && 'bg-buyer-primary text-white'} `} onClick={status_previous}>
                            <Box content={'Previous'} />
                        </div>
                    </div>
                    <div ref={searchbar} className='sticky top-4' >
                        <SearchBox change={change} />
                    </div>

                    <div className=' flex flex-col space-y-5'>

                        {
                            status !== 'previous' ?

                                status !== 'pending' ?

                                    bids.filter(bid => bid.quote_status === status).length > 0 ?
                                        bids.filter(bid => bid.quote_status === status).map((elem, index) => {
                                            return (
                                                <Bid key={elem._id} id={elem._id} elem={elem} />
                                            )
                                        })
                                        :
                                        <h1 className=' text-center text-xl'>No bids are in this status</h1>

                                    :
                                    //  for pending status
                                    bids.filter(bid => bid.quote_status === 'ended').length > 0 ?

                                        bids.filter(bid => bid.quote_status === ('buyer_Accepted' || 'bidding ended')).map((elem, index) => {
                                            return (
                                                <Bid key={elem._id} id={elem._id} elem={elem} />
                                            )
                                        })

                                        :

                                        <h1 className=' text-center text-xl'>No bids are in this status</h1>

                                :

                                // for previous status
                                bids.filter(bid => bid.quote_status === 'rejected' || bid.quote_status === 'accepted').length > 0 ?

                                    bids.filter(bid => bid.quote_status === 'rejected' || bid.quote_status === 'accepted').map((elem, index) => {
                                        return (
                                            <Bid key={elem._id} id={elem._id} elem={elem} />
                                        )
                                    })

                                    :

                                    <h1 className=' text-center text-xl'>No bids are in this status</h1>
                        }




                    </div>


                </div>
            </div>
        </div>
    )
}

export default Bidding