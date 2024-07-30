import Image from "next/image";

export default function Episode() {
  return (
    <div className="bg-[#1E1E1E] p-3 rounded">
        <div className="flex space-x-4">
            <div className="bg-[#262626] w-fit h-36 rounded-md overflow-hidden">
                <Image src='/ressources/episode.png' alt="episode" width={1000} height={100} className="w-full h-full" />
            </div>
            <div className="">
                <div className="flex justify-between">
                    <span>Episode 01</span>
                    <span>43 min</span>
                </div>
                <div className="text-[#F2F2F2]/80">
                    Ignorant que Trevor a parlé à Jessica, Mike se réjouit quand Harvey lui confie une affaire importante dont l`issue est cruciale pour le cabinet.
                </div>
            </div>
        </div>
    </div>
  )
}