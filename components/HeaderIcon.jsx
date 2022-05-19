import React from 'react'

function HeaderIcon({Icon, active}) {

  return (
    <div className="cursor-pointer flex items-center rounded-xl
                  md:px-10 sm:h-14 md:hover:bg-gray-100 
                  active:border-b-2 active:border-blue-500 group">
      <Icon className={`h-5 md:h-10 text-gray-500 group-hover:text-blue-500 
                    ${active && 'text-blue-500'} `} />
    </div>
  )
}

export default HeaderIcon