import { movieList } from "@/app/lib/data-movie";
import CardFilm from "./CardFilm";

export default function SeriesList() {
  return (
    <div>
      <span className="text-white text-xl font-bold block mb-2">
        Meilleurs Series du moment
      </span>
      <div className="w-fit flex gap-x-2">
        {movieList.map((movie, key) => (
          <CardFilm key={key} image={movie.image} title={movie.title} />
        ))}
      </div>
    </div>
  );
}
