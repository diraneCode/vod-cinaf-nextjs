import React from 'react'
import * as Icon from 'react-icons/bi'
import Image from 'next/image'
import AvatarWrapper from '../avatarWrapper';

export default function VideoInfo() {
  return (
    <div className="w-1/3 h-full bg-[#2A2A2ACC] p-4 space-y-4 rounded-xl mr-10 z-10">
      <div className="flex space-x-4">
        <Image
          src="/ressources/teaser-img.png"
          alt="items"
          width={180}
          height={100}
        />
        <div className="flex flex-col gap-y-2">
          <Image
            src="/ressources/victime.png"
            alt="items"
            width={100}
            height={100}
          />
          <span className="text-sm text-green-400">Recommmande a 94%</span>
          <div className="flex space-x-2">
            <div className="w-12 h-6 bg-black rounded text-white text-center">
              16+
            </div>
            <div className="w-12 h-6 bg-black rounded text-white text-center">
              16+
            </div>
            <div className="w-12 h-6 bg-black rounded text-white text-center">
              16+
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button className="size-10 bg-white rounded-full flex items-center justify-center">
          <Icon.BiPlay size={50} color="black" />
        </button>
        <span>Lecture</span>
        <Icon.BiPlus size={25} />
        <Icon.BiShare size={25} />
      </div>
      <div>
        <span className="text-gray-300">Genre : </span>
        <span>Anime, Comedie, Drame</span>
      </div>
      <div>
        <span>Trailer</span>
        <p className="text-sm text-gray-300 mt-3">
          Minga, jeune orpheline vit chez sa marâtre Mami Kaba, une femme
          acariâtre qui n’hésite pas à lui mener la vie dure et la mettra
          hors de chez elle pour une cuillère...
        </p>
      </div>
      <AvatarWrapper />
    </div>
  )
}