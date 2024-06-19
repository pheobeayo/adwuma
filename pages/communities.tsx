import React from 'react'
import NavBar from '@/components/NavBar'
import Alert from '@/components/homecomponents/Alert'
import Search from '@/components/skillscomponent/Search'
import Circles from '@/components/homecomponents/Communities'


const communities = () => {
  return (
    <div className="max-w-md mx-auto ">
      <div className="fixed bottom-0 w-full z-10">
        <NavBar />
      </div>
      <div className="px-3">
        <Alert />
        <Search />
        <Circles/>
      </div>
    </div>
  )
}

export default communities