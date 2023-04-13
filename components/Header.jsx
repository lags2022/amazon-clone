import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

function Header() {
  return (
    <header>
      {/* top nav */}
      <div className=" flex items-start bg-amazon_blue p-1 flex-grow py-2 ">
        <div className=" mt-2 flex items-center flex-grow sm:flex-grow-0 ">
          <Image
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
            <p>Account & Lists</p>
          </div>
          <div className=" newcomponenttwd">
            <p>Returns</p>
            <p>& Orders</p>
          </div>
          <div className=" newcomponenttwd">
            <ShoppingCartIcon className="h-10" />
            <p>Basket</p>
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <div></div>
    </header>
  );
}

export default Header;
