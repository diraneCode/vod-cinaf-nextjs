"use client";

import Image from "next/image";
import Navbar from "../components/navbar";
import RecommandationList from "../components/hero/RecommandationList";
import SeriesList from "../components/hero/SeriesList";
import TeaserList from "../components/hero/TeaserList";
import Footer from "../components/Footer";
import MyListe from "../components/hero/MyListe";
import BestMovieCmr from "../components/hero/BestMovieCmr";
import BestMovie from "../components/hero/BestMovie";
import Hero from "../components/hero/Hero";

export default function Home() {
  return (
    <div className="w-full z-0 h-fit relative">
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
        <div className="py-2 z-30">
          <div className="space-y-14">
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
    </div>
  );
}
