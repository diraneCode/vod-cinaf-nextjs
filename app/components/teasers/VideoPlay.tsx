import React from 'react'
import * as Icon from 'react-icons/bi'
import Image from 'next/image'

export default function VideoPlay() {
  return (
    <div className="w-2/3 h-full flex items-center justify-center relative">
      <div className="w-2/4 h-[96%] flex rounded-xl relative overflow-hidden">
        <Image
          src="/ressources/teaser2.png"
          alt="MovieItem.png"
          width={1000}
          height={100}
          className='bg-cover'
        />
        <button type="button" className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <Icon.BiPlay size={150} />
        </button>
        <div className='w-3/5 h-1 bg-red-700 absolute bottom-0'>

        </div>
      </div>
      <div className="h-2/3 self-end absolute right-5 flex flex-col justify-between">
        <div className="flex flex-col space-y-6 self-end">
          <button type="button" className="size-7 rounded-full bg-white/10 flex items-center justify-center">
            <Icon.BiChevronUp />
          </button>
          <button type="button" className="size-7 rounded-full bg-white/10 flex items-center justify-center">
            <Icon.BiChevronDown />
          </button>
        </div>
        <div className="flex space-x-4 mb-5">
          <button type="button" className="size-7 rounded-full bg-white/10 flex items-center justify-center">
            <Icon.BiVolumeLow />
          </button>
          <button type="button" className="size-7 rounded-full bg-white/10 flex items-center justify-center">
            <Icon.BiUpload />
          </button>
        </div>
      </div>
    </div>
  )
}