import Image from "next/image";
import NavBar from '@/components/NavBar'
import Alert from '@/components/homecomponents/Alert'
import Toptalents from '@/components/homecomponents/Toptalents'
import SearchTalents from '@/components/talentscomponents/Searchtalents'
import Choosetalents from '@/components/talentscomponents/Choosetalents'
import React from 'react'
import zkbutton from '@/assets/alert/zkbutton.svg'

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
        <div className='mb-28'>
        <Choosetalents />
        <div className='grid place-items-end mt-3 mb-10'>
      <Image src={zkbutton} alt='zkbutton' />
      </div>
        </div>
      </div>
    </div>
  )
}

export default talents