import React from 'react'
import InputBox from './InputBox'
import Stories from './Stories'

function Feed() {
  return (
    <div 
      className="flex-grow h-screen pb-44 pt-6 mr-6">
      <div 
        className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        <InputBox />
        {/* Post */}
      </div>
    </div>
  )
}

export default Feed