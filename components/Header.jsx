import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

function Header() {
  return (
    <header>
      {/* top nav */}
      <div className=" flex items-start bg-amazon_blue p-1 flex-grow py-2 ">
        <div className=" mt-2 flex items-center flex-grow sm:flex-grow-0 ">
          <Image
            style={{ objectFit: "contain" }}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            // objectFit="containt"
            className=" cursor-pointer"
          />
        </div>

        {/* search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 ">
          <input
            className=" p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 "
            type="text"
          />
          <MagnifyingGlassIcon className=" h-12 p-4" />
        </div>

        {/* right */}
        <div className=" text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className=" newcomponenttwd">
            <p>Hello Luis</p>
            <p className=" font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className=" newcomponenttwd">
            <p>Returns</p>
            <p className=" font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative newcomponenttwd flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2 ">
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className=" newcomponenttwd flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="newcomponenttwd ">Prime Video</p>
        <p className="newcomponenttwd ">Amazon Business</p>
        <p className="newcomponenttwd ">Today's Deals</p>
        <p className="newcomponenttwd hidden lg:inline-flex">Electronics</p>
        <p className="newcomponenttwd hidden lg:inline-flex">Food & Grocery</p>
        <p className="newcomponenttwd hidden lg:inline-flex">Prime</p>
        <p className="newcomponenttwd hidden lg:inline-flex">Buy Again</p>
        <p className="newcomponenttwd hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="newcomponenttwd hidden lg:inline-flex">
          Health & Personal Care
        </p>
      </div>
    </header>
  );
}

export default Header;
