import React from "react";
import CardFilm from "./CardFilm";
import { movieList } from "@/app/lib/data-movie";

type Props = {};

export default function MyListe({}: Props) {
  return (
    <div>
      <span className="text-white text-xl font-bold block mb-2">Ma liste</span>
      <div className="w-fit flex gap-x-2">
        {movieList.map((movie, key) => (
          <CardFilm key={key} image={movie.image} title={movie.title} />
        ))}
      </div>
    </div>
  );
}
