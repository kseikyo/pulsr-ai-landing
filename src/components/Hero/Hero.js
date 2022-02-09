import { useTypewriter, Cursor } from "react-simple-typewriter";
import { ArrowRightIcon } from "@heroicons/react/outline";

export const Hero = () => {
  const { text } = useTypewriter({
    words: ["Bored Apes Yacht Club", "Cryptopunks", "Cryptoadz", "Cool Cats"],
    loop: 0,
  });
  return (
    <section className="my-24 max-w-full bg-black p-8">
      <div className="relative flex max-w-full flex-col justify-between gap-8 p-4 md:flex-row md:p-8 md:text-left">
        <div className="min-w-[50%] max-w-5xl md:pl-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">
                Your visual discovery <br /> engine for NFTs
              </span>
            </h1>
            <p className="text-xl text-white/[.53] md:text-2xl">
              Discover, share and collect the next <span>{text}</span>
              <Cursor />
              <br />
              before anybody else.
            </p>
          </div>
        </div>
        <div className="md:mb-22 relative mb-56 w-screen">
          <div className="absolute inset-0 left-auto flex min-h-[300px] w-full overflow-hidden md:-top-10 md:-right-20 md:min-h-[350px] md:w-96">
            <div className="w-full rounded-[50px] bg-gradient-to-r from-light-purple to-light-blue p-1 md:rounded-r-none">
              <div className="h-full rounded-[50px] bg-black md:rounded-r-none">
                <div className="bg-gradient-to-r from-light-purple to-light-blue bg-clip-text">
                  <div className="flex flex-col gap-3 px-6 py-8 md:px-11">
                    <span className="text-4xl text-transparent md:text-5xl">
                      Member's <br />
                      portal
                    </span>
                    <p className="text-sm text-gray md:text-lg">Access Closed Beta</p>
                    <button className="mt-6 w-16 rounded-full bg-gradient-to-r from-light-purple to-light-blue p-4">
                      <ArrowRightIcon className="h-8 w-8 text-black" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
