import Image from "next/image";
import React from 'react'
import splash from "../../assets/alert/splash.svg"

const Splash = () => {
  return (
    <div className='bg-gradient-to-r from-[#9747FF] via-[#6A93FF] to-[#9747FF] w-screen h-screen'>
      <div className='grid place-items-center'><Image src={splash} alt="splash" /></div>
    </div>
  )
}

export default Splash