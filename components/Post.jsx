import React from 'react';
import Image from 'next/image';
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline';

function Post({image, name, timestamp, message, imagePostUrl}) {

  // console.info(imagePostUrl);

  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 round-t-2xl shadow-sm ">
        <div className="flex items-center space-x-2">
          <img 
            className="rounded-full"
            src={image.stringValue}
            width={40}
            height={40}
            alt="" />

          <div>
            <p className="font-medium">
                {name.stringValue}
            </p>

            <p className="text-xs text-gray-400">
                {timestamp && 
                  
                  new Date(timestamp.timestampValue).toLocaleString("id-ID")
                }
            </p>
          </div>
        </div>

        <p className="pt-4">
          {message.stringValue}
        </p>
      </div>

      {imagePostUrl && (
        <div className=" relative h-56 md:h-96 bg-white"> 
          <Image 
            priority
            src={imagePostUrl.stringValue}
            objectFit="cover"
            layout="fill"
          />
        </div>
      )}

      {/* Footer of post */}
      <div className="flex justify-between items-center rounded-b-xl
                    shadow-md text-gray-400 border-t bg-white">
        <div className="inputIcon rounded-none rounded-bl-xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Like</p>
        </div>

        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>

        <div className="inputIcon rounded-none rounded-br-xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  )
}

export default Post