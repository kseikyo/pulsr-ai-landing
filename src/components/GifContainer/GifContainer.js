export const GifContainer = () => {
  return (
    <div className="group relative px-8 md:px-0">
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-light-purple to-light-blue opacity-75 blur-3xl transition duration-200 group-hover:opacity-95"></div>
      <div className="relative w-full rounded-lg bg-gradient-to-r from-light-purple to-light-blue">
        <div className="flex flex-col items-center justify-center gap-8 py-8">
          <h2 className="px-4 text-center text-xl font-semibold leading-normal text-white md:max-w-[50%] md:text-5xl">
            A personalized NFT search experience made just for you
          </h2>
          <div className="flex min-h-[300px] w-[80%] items-center justify-center rounded-md bg-black/50 shadow-md">
            GIF CONTAINER
          </div>
          <p className="text-md text-center font-medium text-white/70 md:text-left md:text-2xl">
            Get NFT recommendations based on vibes, leading collectors and market signals
          </p>
        </div>
      </div>
    </div>
  );
};
