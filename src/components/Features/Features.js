import Image from "next/image";

export const Features = ({}) => {
  return (
    <div className="space-y-56">
      <section className="mx-auto z-0 grid w-full grid-cols-1 gap-8 bg-black md:max-w-[1650px] md:grid-cols-2">
        <div className="relative row-start-2 flex flex-col gap-6 md:row-start-1">
          <div className="absolute z-0 inset-0 -left-16 hidden h-[80%] w-[60%] rounded-full bg-gradient-to-r from-light-purple to-light-blue opacity-[0.15] blur-3xl md:block"></div>
          <h3 className="text-[2.5rem] font-semibold text-white md:text-6xl md:leading-snug">
            Use your vibe to <br />
            find your tribe.
          </h3>
          <p className="text-base text-gray md:max-w-2xl md:text-2xl">
            Express your 1/1 taste and co-curate with other web3 culture makers
          </p>
          <a
            href="#"
            className="btn-cta z-10 mt-8 flex w-full items-center justify-center space-x-4 md:max-w-xs"
          >
            <Image width={24} height={24} src="/svgs/discord-black.svg" alt="discord-icon" />
            <span className="text-lg font-medium">Join our community</span>
          </a>
        </div>
        <div className="row-start-1 -mt-12 flex items-start justify-end">
          <div className="relative">
            <div className="absolute inset-0 left-32 hidden h-[120%] w-[90%] rounded-full bg-light-purple opacity-[0.1] blur-3xl md:block"></div>
            <Image src="/nfts.png" width={550} height={550} />
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full grid-cols-1 gap-8 bg-black md:max-w-[1650px] md:grid-cols-2">
        <div className="row-start-1 -mt-12 flex items-center justify-start">
          <div className="relative">
            <div className="absolute inset-0 -left-20 -top-10 hidden h-[120%] w-[80%] rounded-full bg-gradient-to-r from-light-purple to-light-blue opacity-[0.15] blur-3xl md:block"></div>
            <Image src="/items.png" width={500} height={300} alt="trendsetter" />
          </div>
        </div>
        <div className="relative row-start-2 flex flex-col gap-6 md:row-start-1">
          <div className="absolute inset-0 left-72 top-20 hidden h-[120%] w-[80%] rounded-full bg-gradient-to-r from-light-purple to-light-blue opacity-[0.15] blur-3xl md:block"></div>
          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-r from-light-purple to-light-blue bg-clip-text">
              <span className="text-xl font-medium text-transparent">Coming soon ᵍᵐ</span>
            </div>
            <h3 className="text-[2.5rem] font-semibold text-white md:text-6xl md:leading-snug">
              Be a culture maker, <br className="hidden md:block" />
              get rewarded.
            </h3>
          </div>
          <p className="text-base text-gray md:max-w-2xl md:text-2xl">
            Pulsr is a community-first NFT social and visual discovery engine that rewards you for
            being you!
          </p>
          <a
            href="#"
            className="btn-cta mt-8 flex w-full items-center justify-center space-x-4 md:max-w-xs"
          >
            <Image width={24} height={24} src="/svgs/twitter-black.svg" alt="twitter icon" />
            <span className="text-lg font-medium">Follow us</span>
          </a>
        </div>
      </section>
    </div>
  );
};
