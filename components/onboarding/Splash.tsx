import Image from "next/image";
import React from 'react'
import splash from "../../assets/alert/splash.svg"

const Splash = () => {
  return (
    <div className='bg-white w-screen h-screen'>
      <div className='grid place-items-center'><Image src={splash} alt="splash" /></div>
    </div>
  )
}

export default Splash