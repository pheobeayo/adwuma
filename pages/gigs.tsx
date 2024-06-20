import NavBar from '@/components/NavBar'
import Alert from '@/components/homecomponents/Alert'
import SearchGigs from '@/components/gigcomponents/Searchgigs'
import React from 'react'
import Gigs from '@/components/gigcomponents/Gigs'



const gigs = () => {
  return (
    <div className="max-w-md mx-auto ">
      <div className="fixed bottom-0 w-full z-10">
        <NavBar />
      </div>
      <div className="px-3">
        <Alert />
        <SearchGigs/>
        <Gigs/>
      </div>
    </div>
  )
}

export default gigs