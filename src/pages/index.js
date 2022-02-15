import Image from "next/image";
import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { GifContainer } from "../components/GifContainer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <div className="h-full w-full bg-black">
      <Header />
      <div className="overflow-hidden md:mb-8">
        <Hero />
      </div>
      <main className="mb-24 bg-black md:mx-auto md:max-w-[1650px]">
        <GifContainer />
      </main>
      <div className="overflow-hidden">
        <div className="my-48">
          <div className="px-8 md:px-20">
            <Features />
          </div>
        </div>
      </div>
      <div className="mt-12 mb-48 flex items-center justify-center px-8 lg:backdrop-blur-3xl">
        <div className="rounded-xl border-[1px] border-white/[51%] bg-white/10 p-8 shadow md:w-2/3 md:p-16 ">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center gap-4">
              <Image src="/svgs/click.svg" width={40} height={40} alt="Join us clicking" />
              <span className="text-lg font-medium text-white md:text-2xl">
                Become an Early Member
              </span>
            </div>
            <div className="text-center text-sm text-gray md:max-w-md md:text-lg">
              Be the first to know of our curated drops and experience the future of NFT discovery.
            </div>
            <a href="#" className="btn-cta mt-6 px-16 text-lg font-medium">
              Join Here
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
