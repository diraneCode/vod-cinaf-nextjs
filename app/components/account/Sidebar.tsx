'use client'

import { NavLinks } from '@/app/lib/accounts/NavLinks'
import Link from 'next/link'
import { useState } from 'react'
import * as Icon from 'react-icons/bi'

export default function Sidebar() {
    const [isActive, setIsActive] = useState(false)
  return (
    <div className='w-2/5 h-fit fixed flex flex-col gap-y-14 text-white self-start left-32'>
        <div className='text-3xl'>
            Gestion du <br /> compte
        </div>
        <ul className='space-y-4'>
            {
                NavLinks.map((link, key) => (
                    <Link key={key} href={link.href} className='flex items-center text-sm gap-x-2'>
                        {link.icon}
                        <span>{link.title}</span>
                    </Link>
                ))
            }
        </ul>
    </div>
  )
}