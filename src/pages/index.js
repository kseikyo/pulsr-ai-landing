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
      <Footer />
    </div>
  );
}
