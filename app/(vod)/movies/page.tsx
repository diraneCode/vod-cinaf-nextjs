import Footer from "@/app/components/Footer";
import BestMovie from "@/app/components/hero/BestMovie";
import BestMovieCmr from "@/app/components/hero/BestMovieCmr";
import Hero from "@/app/components/hero/Hero";
import MyListe from "@/app/components/hero/MyListe";
import RecommandationList from "@/app/components/hero/RecommandationList";
import SeriesList from "@/app/components/hero/SeriesList";
import TeaserList from "@/app/components/hero/TeaserList";
import Navbar from "@/app/components/navbar";
import Image from "next/image";

export default function Movie() {
  return (
    <div className="w-full h-fit z-0 relative">
      <div className="w-screen h-screen absolute -z-10">
        <Image
          src="/ressources/home.png"
          alt="samba"
          width={1000}
          height={100}
          className="w-full h-full opacity-80"
        />
      </div>
      <div className="py-2 px-4">
        <Hero />
        <div className="py-2 space-y-4">
          <RecommandationList />
          <SeriesList />
          <TeaserList />
          <MyListe />
          <BestMovieCmr />
          <BestMovie />
        </div>
        <Footer />
      </div>
    </div>
  );
}
