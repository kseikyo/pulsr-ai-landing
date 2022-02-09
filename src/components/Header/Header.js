import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";

export const Header = () => {
  return (
    <Popover className="relative bg-transparent">
      <div className="pointer-events-none absolute inset-0 z-30 shadow" aria-hidden="true" />
      <div className="relative z-20 md:px-20">
        <div className="flex items-center justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8">
          <div>
            <a href="#" className="flex">
              <span className="relative text-2xl font-bold text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:w-full after:bg-gradient-to-r after:from-light-purple after:to-light-blue after:content-['']">
                pulsr
              </span>
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <nav className="flex items-center gap-4">
              <a href="#" className="flex h-full w-full items-center">
                <Image width={24} height={24} src="/svgs/discord.svg" />
              </a>
              <a href="#" className="flex h-full w-full items-center">
                <Image width={24} height={24} src="/svgs/twitter.svg" />
              </a>
            </nav>
            <div className="flex items-center md:ml-12">
              <a href="#" className="btn-cta">
                Join whitelist
              </a>
            </div>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-[#151515] rounded-lg bg-black text-white shadow-lg ring-1 ring-white ring-opacity-5">
            <div className="px-5 pt-5 pb-6 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <a href="#" className="flex">
                    <span className="relative text-2xl font-bold text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:w-full after:bg-gradient-to-r after:from-light-purple after:to-light-blue after:content-['']">
                      pulsr
                    </span>
                  </a>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-black p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="flex flex-col items-center gap-4">
                <a href="#" className="flex h-full w-full items-center justify-center">
                  <Image width={24} height={24} src="/svgs/discord.svg" />
                </a>
                <a href="#" className="flex h-full w-full items-center justify-center">
                  <Image width={24} height={24} src="/svgs/twitter.svg" />
                </a>
                <div className="flex items-center justify-center md:ml-12">
                  <a href="#" className="btn-cta">
                    Join whitelist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
