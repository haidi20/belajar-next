import Image from 'next/image'
import React from 'react'

function SidebarRow({Icon, src, title}) {
  return (
    <div className="flex">
      {src && (
        <Image 
          className="rounded-full cursor-pointer"
          src={src}
          width="30"
          height="30"
          layout='fixed'
        />
      )}
      {Icon && (
        <Icon className="h-8 w-8 text-blue-500" />
      )}
      <p className="hidden sm:inline-flex font-medium">
        {title}
      </p>
    </div>
  )
}

export default SidebarRow