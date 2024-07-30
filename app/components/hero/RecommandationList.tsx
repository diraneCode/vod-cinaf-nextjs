import React from "react";
import CardFilm from "./CardFilm";
import { movieList } from "@/app/lib/data-movie";

export default function RecommandationList() {
  return (
    <div className="w-fit flex gap-x-2">
      {movieList.map((movie, key) => (
        <CardFilm key={key} image={movie.image} title={movie.title} />
      ))}
    </div>
  );
}
