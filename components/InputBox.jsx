import { useSession } from 'next-auth/react'
import Image from 'next/image';
import React, { useRef, useState } from 'react'

import { EmojiHappyIcon } from '@heroicons/react/solid';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/outline';

import { db } from '../firebase';
import { addDoc, serverTimestamp, collection } from "firebase/firestore"; 

function InputBox() {
const {data: session} = useSession();
const inputRef = useRef(null);
const filepickerRef = useRef(null);
const [imagePost, setImagePost] = useState(null);

  const sendPost = async e => {
    e.preventDefault();

    if (!inputRef.current.value) return ;

    await await addDoc(collection(db, "posts"), {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: serverTimestamp(),
    });

    inputRef.current.value = "";
  }

  const addImageToPost = e => {
    e.preventDefault();

    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = readerEvent => {
      setImagePost(readerEvent.target.result);
    }
  }

  const removeImage = () => {
    setImagePost(null);
  }

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md
                   text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image 
          className=" rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 
                      flex-grow px-5 focus:outline-none"
            placeholder={`What's on your mind, ${session.user.name}?`} 
            ref={inputRef}
            type="text" />
            <button 
              hidden 
              onClick={sendPost}>
                Submit
            </button>
        </form>

        {imagePost && (
          <div 
            className="flex flex-col filter cursor-pointer
                       hover:brightness-110 transition duration-150 transform hover:scale-105 "
            onClick={removeImage}> 
            <img 
              className="h-10 object-contain"
              src={imagePost} 
              alt="review image post" />
            <p
              className="text-xs text-red-500 text-center">
              Remove
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t ">
        <div className="inputIcon">
          <VideoCameraIcon 
            className="h-7 text-red-500"/>
          <p
            className="text-xs sm:text-sm xl:text-base">
              Live Video
          </p>
        </div>
        <div
          onClick={() => filepickerRef.current.click()} 
          className="inputIcon">
          <CameraIcon 
            className="h-7 text-green-400"/>
          <p 
            className="text-xs sm:text-sm xl:text-base">
              Photo/Video
          </p>
          <input 
            ref={filepickerRef}
            type="file" 
            onChange={addImageToPost}
            hidden/>
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon 
            className="h-7 text-yellow-300"/>
          <p 
            className="text-xs sm:text-sm xl:text-base">
              Feeling/Activity
          </p>
        </div>
      </div>
    </div>
  )
}

export default InputBox