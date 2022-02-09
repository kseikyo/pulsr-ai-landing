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
      <Footer />
    </div>
  );
}
