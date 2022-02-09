import { useTypewriter, Cursor } from "react-simple-typewriter";
import { ArrowRightIcon } from "@heroicons/react/outline";

export const Hero = () => {
  const { text } = useTypewriter({
    words: ["Bored Apes Yacht Club", "Cryptopunks", "Cryptoadz", "Cool Cats"],
    loop: 0,
  });
  return (
    <section className="mt-24 max-w-full bg-black p-8">
      <div className="relative flex flex-col md:flex-row max-w-full justify-between gap-8 p-4 md:p-8">
        <div className="max-w-5xl md:pl-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">
                Your visual discovery <br /> engine for NFTs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/[.53]">
              Discover, share and collect the next <span>{text}</span>
              <Cursor />
              <br />
              before anybody else.
            </p>
          </div>
        </div>
        <div className="md:absolute md:-right-10 md:top-0 md:bottom-0 flex md:w-96 w-full overflow-hidden md:min-h-[350]">
          <div className="w-full rounded-2xl md:rounded-r-none bg-gradient-to-r from-light-purple to-light-blue p-1">
            <div className="h-full rounded-2xl md:rounded-r-none bg-black">
              <div className="bg-gradient-to-r from-light-purple to-light-blue bg-clip-text">
                <div className="flex flex-col gap-3 px-6 md:px-11 py-8">
                  <h2 className="text-3xl md:text-5xl text-transparent">
                    Member's <br />
                    portal
                  </h2>
                  <p className="md:text-lg text-gray">Access Closed Beta</p>
                  <button className="w-12 md:w-14 rounded-full bg-gradient-to-r from-light-purple to-light-blue p-4">
                    <ArrowRightIcon className="md:h-6 md:w-6 w-4 h-4 text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
