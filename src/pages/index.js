import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <div className="h-full w-full bg-black">
      <Header />
      <div className="overflow-hidden">
        <Hero />
      </div>
      <main className="mb-24 bg-black md:mx-auto md:max-w-[1650px]">
        <div className="group relative md:px-12 px-8">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-light-purple to-light-blue opacity-75 blur-3xl transition duration-200 group-hover:opacity-95"></div>
          <div className="relative w-full rounded-lg bg-gradient-to-r from-light-purple to-light-blue">
            <div className="flex flex-col items-center justify-center gap-8 py-8">
              <h2 className="md:max-w-[50%] px-4 text-center text-xl md:text-5xl font-semibold leading-normal text-white">
                A personalized NFT search experience made just for you
              </h2>
              <div className="flex w-[80%] items-center justify-center rounded-md bg-black/50 shadow-md min-h-[300px]">
                GIF CONTAINER
              </div>
              <p className="text-white/70 text-center md:text-left font-medium text-md">
                Get NFT recommendations based on vibes, leading collectors and market signals
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
