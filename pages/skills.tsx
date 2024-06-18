import NavBar from '@/components/NavBar'
import Alert from '@/components/homecomponents/Alert'
import Featured from '@/components/skillscomponent/Featured'
import Recent from '@/components/skillscomponent/Recent'
import Search from '@/components/skillscomponent/Search'
import React from 'react'

const skills = () => {
  return (
    <div className="max-w-md mx-auto ">
      <div className="fixed bottom-0 w-full z-10">
        <NavBar />
      </div>
      <div className="px-3">
        <Alert />
        <Search />
        <Featured />
        <Recent />
      </div>
    </div>
  )
}

export default skills