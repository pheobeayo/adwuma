import NavBar from '@/components/NavBar'
import Alert from '@/components/homecomponents/Alert'
import Toptalents from '@/components/homecomponents/Toptalents'
import SearchTalents from '@/components/talentscomponents/Searchtalents'
import Choosetalents from '@/components/talentscomponents/Choosetalents'
import React from 'react'


const talents = () => {
  return (
    <div className="max-w-md mx-auto ">
      <div className="fixed bottom-0 w-full z-10">
        <NavBar />
      </div>
      <div className="px-3">
        <Alert />
        <SearchTalents />
        <Toptalents />
        <Choosetalents />
      </div>
    </div>
  )
}

export default talents