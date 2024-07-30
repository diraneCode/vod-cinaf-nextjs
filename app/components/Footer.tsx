import React from 'react'
import * as Icon from 'react-icons/bi'
import IconSvg from './IconSvg'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className='mt-20 p-10 space-y-6'>
        <div className='text-white text-xs flex items-center justify-between'>
            <span>FAQ</span>
            <span>Blog</span>
            <span>Politique de confidentialite</span>
        </div>
        <div className='text-white text-xs flex items-center justify-between'>
            <span>Diffuser son contenu sur Cinaf</span>
            <span>A propos</span>
            <span>Affiliation</span>
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex space-x-4'>
                <Icon.BiLogoTiktok size={25} color='white' />
                <IconSvg name="instagram" />
                <IconSvg name="linkedin" />
                <IconSvg name="twitter" />
                <IconSvg name="youtube" />
                <IconSvg name="facebook" />
            </div>
            <div className='flex items-center space-x-4'>
                <IconSvg name="apple" className="w-7" />
                <IconSvg name="playstore" />
            </div>
            <div className='text-black'>
                <a href="#" className='p-2 bg-white rounded-full text-xs font-bold flex'>
                    <IconSvg name="symbol-sms" className="w-5 h-5 mr-2" /> Contactez nous
                </a>
            </div>
        </div>
        <div className='text-white text-xs'>&copy 2018-2023 CINAF TV.</div>
    </div>
  )
}