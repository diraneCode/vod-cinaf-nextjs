import React from "react";
import Navbar from "../../components/navbar";
import Image from "next/image";
import VideoPlay from "@/app/components/teasers/VideoPlay";
import VideoInfo from "@/app/components/teasers/VideoInfo";

type Props = {};

export default function Teasers({}: Props) {
  return (
    <div className="h-screen px-3 py-2 text-white overflow-y-hidden">
      <div className="w-full h-[90%] flex rounded overflow-hidden">
        <Image
          src="/ressources/teaser2.png"
          alt="MovieItem.png"
          width={1000}
          height={100}
          className='w-full h-full bg-cover filter blur-3xl absolute -z-0'
        />
        <VideoPlay />
        <VideoInfo />
      </div>
    </div>
  );
}
