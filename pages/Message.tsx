import NavBar from '@/components/NavBar'
import Alert from '@/components/homecomponents/Alert'
import Messages from '@/components/messagecomponents/MessageBox'
import SearchMessage from '@/components/messagecomponents/SearchMessage'
import React from 'react'

const message = () => {
  return (
    <div className="max-w-md mx-auto ">
      <div className="fixed bottom-0 w-full z-10">
        <NavBar />
      </div>
      <div className="px-3">
        <Alert />
        <SearchMessage />
        <Messages />
      </div>
    </div>
  )
}

export default message