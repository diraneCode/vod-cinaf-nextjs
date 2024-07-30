import React from "react";
import CardTeaser from "./CardTeaser";
import { teaserList } from "@/app/lib/data-movie";

type Props = {};

export default function TeaserList({}: Props) {
  return (
    <div>
      <span className="text-white text-xl font-bold block mb-2">Teasers</span>
      <div className="w-fit flex gap-x-2">
        {teaserList.map((movie, key) => (
          <CardTeaser
            key={key}
            image={movie.image}
            title={movie.title}
            date={movie.date}
          />
        ))}
      </div>
    </div>
  );
}
