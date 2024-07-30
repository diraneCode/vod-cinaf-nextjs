import React from "react";
import Navbar from "../../components/navbar";
import Image from "next/image";
import * as Icon from "react-icons/bi";
import Link from "next/link";

type Props = {};

export default function Detail({}: Props) {
  return (
    <div className="h-screen px-3 py-2 text-white">
      <div className="h-5/6 py-8 px-24">
        <div className="space-x-4 mb-5">
          <Link href='#'>Nouveautees</Link>
          <Link href='#' className="text-gray-300">Bientot</Link>
        </div>
        <div className="h-full flex space-x-5">
          <div className="w-full h-full flex items-end rounded-2xl relative overflow-hidden z-0">
            <Image
              src="/ressources/cover1.png"
              className="w-full h-full opacity-85 absolute -z-10"
              alt="v"
              width={1000}
              height={100}
            />
            <div className="p-6 z-30 space-y-4">
              <Image
                src="/ressources/victime.png"
                className="mb-6"
                alt="v"
                width={200}
                height={200}
              />
              <span className="text-xs">MAINTENANT DISPONIBLE</span>
              <div className="w-1/4 text-md">
                Minga, jeune orpheline vit chez sa marâtre Mami Kaba, une femme
                acariâtre qui n’hésite pas à lui mener.....
              </div>
              <div className="flex items-center space-x-2">
                <button className="size-10 bg-white rounded-full flex items-center justify-center">
                  <Icon.BiPlay size={50} color="black" />
                </button>
                <span>Lecture</span>
                <Icon.BiPlus size={25} />
                <Icon.BiShare size={25} />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="w-[300px] h-[70px] bg-[#252525] rounded p-2 flex items-center space-x-2">
              <Image
                src="/ressources/items1.png"
                alt="items"
                width={100}
                height={10}
              />
              <Link href='#' className="text-sm">Victime saison 2</Link>
            </div>
            <div className="w-[300px] h-[70px] rounded p-2 flex items-center space-x-2">
              <Image
                src="/ressources/items2.png"
                alt="items"
                width={100}
                height={10}
              />
              <Link href='#' className="text-sm">Victime saison 2</Link>
            </div>
            <div className="w-[300px] h-[70px] rounded p-2 flex items-center space-x-2">
              <Image
                src="/ressources/items3.png"
                alt="items"
                width={100}
                height={10}
              />
              <Link href='#' className="text-sm">Victime saison 2</Link>
            </div>
            <div className="w-[300px] h-[70px] rounded p-2 flex items-center space-x-2">
              <Image
                src="/ressources/items4.png"
                alt="items"
                width={100}
                height={10}
              />
              <Link href='#' className="text-sm">Victime saison 2</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
