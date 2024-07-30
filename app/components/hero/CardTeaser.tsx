import Image from 'next/image'
import React from 'react'

type Props = {
    image?: string
    title?: string
    date?: string 
}

export default function CardTeaser({image, title, date}: Props) {
  return (
    <div className='w-full space-y-2'>
        <div className="w-[210px] h-[370px] bg-[#262626] rounded">
            {image ? <Image src={image} alt={image} width={1000} height={100} /> : null}
        </div>
        {
            title ? <div className="w-[208px] h-[43px] p-2 bg-[#262626] rounded text-white text-xs">{title}</div> : 
            <div className="w-[208px] h-[43px] bg-[#262626] rounded"></div>
        }
        {
            date ? <div className="w-[77px] h-[15px] bg-[#262626] rounded text-center text-xs text-white">{date}</div> :
            <div className="w-[77px] h-[15px] bg-[#262626] rounded"></div>
        }
    </div>
  )
}