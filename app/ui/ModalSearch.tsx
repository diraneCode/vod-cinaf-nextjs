import CardFilm from "@/app/components/hero/CardFilm";

export default function ModalSearch() {
  return (
    <div className="w-screen h-screen bg-[#141414] px-3 py-2 text-white space-y-10 flex flex-col fixed top-16 z-50">
      <div className="w-10/12 self-center space-y-4">
        <span className="font-bold text-xl">Resultat de votre recherche</span>
        <div className="flex flex-wrap gap-4">
          <CardFilm title="Movie" image="/ressources/rem1.png" />
          <CardFilm title="Movie" image="/ressources/rem1.png" />
          <CardFilm title="Movie" image="/ressources/rem1.png" />
          <CardFilm title="Movie" image="/ressources/rem1.png" />
        </div>
      </div>
    </div>
  );
}
