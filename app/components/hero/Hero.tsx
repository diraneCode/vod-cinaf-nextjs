'use client'

import Image from "next/image"
import * as Icon from 'react-icons/bi'
import IconSvg from "../IconSvg"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Hero() {
  const pathname = usePathname();

  return (
    <div className="w-1/3 space-y-2 mt-10">
          {
            pathname == "/" ? null : 
            <div className="flex items-center space-x-7 -mt-8">
              <label htmlFor="serie" className="text-2xl text-white font-bold">{pathname == "/movies" ? "Films" : "Serie"}</label>
              <select id="serie" className="bg-black/80 py-1 px-3 border border-[#f2f2f2]/70 font-bold text-white">
                <option value="">Genre</option>
              </select>
            </div>
          }
          <Image
            src="/ressources/samba.png"
            alt="samba"
            width={250}
            height={200}
            className="-ml-3"
          />
          <div className="flex space-x-2">
            <span className="text-white">50 min</span>
            <span className="text-white">2021</span>
            <div className="w-8 h-6 bg-black rounded flex items-center justify-center">
              <span className="text-white text-xs text-center">16+</span>
            </div>
            <div className="w-8 h-6 bg-black rounded flex items-center justify-center">
              <span className="text-white text-xs text-center">5.1</span>
            </div>
            <div className="w-8 h-6 bg-black rounded flex items-center justify-center">
              <IconSvg name="ad" className="w-7" />
            </div>
            <div className="w-8 h-6 bg-black rounded flex items-center justify-center">
              <IconSvg name="hd" className="w-7" />
            </div>
            <div className="w-8 h-6 bg-black rounded flex items-center justify-center">
              <IconSvg name="comment" />
            </div>
          </div>
          <div className="text-white">
            Minga, jeune orpheline vit chez sa marâtre Mami Kaba, une femme
            acariâtre qui n’hésite pas à lui mener la vie dure et la mettra hors
            de chez elle pour une cuillère...
          </div>
          <div>
            <span className="text-xs text-gray-300">Drame . Anime</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="size-4 rounded-full bg-blue-300 flex items-center justify-center">
              <Icon.BiCheck />
            </div>
            <span className="text-white text-xs">
              Recompence disponible pour ce contenu
            </span>
          </div>
          <div className="w-screen pr-20 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href={`/player`} className="size-20 rounded-full bg-[#f2f2f2] flex items-center justify-center">
                <IconSvg name="player-play" className="w-16 h-16" />
              </Link>
              <div className="flex justify-around">
                <div className="text-white text-2xl font-bold">
                  Regader <br /> Maintenant
                </div>
                <div className="space-x-10 flex">
                  <IconSvg name="add" className="inline cursor-pointer" />
                  <IconSvg name="share" className="inline cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button type="button" className="size-6 rounded-full border boder-white flex items-center justify-center">
                <IconSvg name="volume-mute" className="w-5" />
              </button>
              <div
                className="w-16 h-6 bg-black/40 border-l-2 
                border-white flex items-center justify-center text-white"
              >
                <span>13+</span>
              </div>
            </div>
          </div>
          <div className="text-white text-xl font-bold">Nos Recommandations</div>
        </div>
  )
}