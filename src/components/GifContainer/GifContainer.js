export const GifContainer = () => {
  return (
    <div className="group relative md:px-24 2xl:px-0">
      <div className="absolute inset-0 hidden rounded-none bg-gradient-to-r from-light-purple to-light-blue opacity-75 blur-3xl transition duration-200 group-hover:opacity-95 sm:rounded-[1.875rem] md:block"></div>
      <div className="relative w-full rounded-none bg-gradient-to-r from-light-purple to-light-blue sm:rounded-[1.875rem]">
        <div className="flex flex-col items-center justify-center gap-8 py-8">
          <h2 className="px-8 text-center text-2xl font-semibold leading-normal text-white md:max-w-full md:text-5xl lg:max-w-[70%] lg:px-12">
            A personalized NFT search experience made just for you
          </h2>
          <div className="flex min-h-[300px] w-[80%] items-center justify-center rounded-md bg-black/50 shadow-md">
            GIF CONTAINER
          </div>
          <p className="px-4 text-center text-sm font-medium text-white/70 md:text-2xl lg:px-0 lg:text-left">
            Get NFT recommendations based on vibes, leading collectors and market signals
          </p>
        </div>
      </div>
    </div>
  );
};
