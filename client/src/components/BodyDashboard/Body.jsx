import React from 'react'
import TopSection from '../topSection/TopSection'
import Listing from '../listing/Listing'
import Activity from '../activity/Activity'


export default function Body() {
  return (
    <div className='mainContent'>
        <TopSection />
        <div className='bottom flex'>
            <Listing />
            <Activity />
        </div>
        </div>
  )
}
