"use client";

import { movie } from "@/app/types/movie";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-icons/bi";
import ModalDetail from "../modal-detail";
import { createPortal } from "react-dom";
import { useState } from "react";

export default function CardFilm({ title, image }: movie) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-[291px] h-[161px] bg-[#262626] rounded hover:sticky hover:scale-110 hover:mb hover:-translate-y-24 transition-all cursor-pointer group">
      <Image
        src={image}
        alt={image}
        width={1000}
        height={200}
        className="w-full h-full"
      />
      <div className="w-full bg-[#181818] rounded-e p-2 hidden group-hover:block">
        <div className="w-full flex items-center justify-between space-y-2">
          <div className="flex space-x-3">
            <Link
              href={`/player`}
              type="button"
              className="size-8 rounded-full bg-white flex items-center justify-center"
            >
              <Icon.BiPlay size={50} color="black" />
            </Link>
            <Link
              href={`/movies/1`}
              className="size-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <Icon.BiPlus size={50} color="white" />
            </Link>
          </div>
          <button
            type="button"
            className="size-8 rounded-full border border-gray-300 flex items-center justify-center"
            onClick={() => setShowModal(true)}
          >
            <Icon.BiChevronDown size={50} color="white" />
          </button>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="w-8 h-6 bg-[#262626] rounded flex items-center justify-center">
            <span className="text-white text-xs text-center">16+</span>
          </div>
          <div className="w-8 h-6 bg-[#262626] rounded flex items-center justify-center">
            <span className="text-white text-xs text-center">16+</span>
          </div>
          <span className="text-sm text-gray-400">2 saisons</span>
        </div>
        <div className="text-gray-300 text-sm space-x-4">
          <span>Action</span>
          <span>.</span>
          <span>Thriller</span>
        </div>
      </div>
      {showModal &&
        createPortal(
          <ModalDetail closeModal={() => setShowModal(false)} />,
          document.body
        )}
    </div>
  );
}
