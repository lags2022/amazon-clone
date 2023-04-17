import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

function Checkout() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            className="object-contain"
            src="https://links.papareact.com/ikj"
            width={800}
            height={203}
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">Your Shopping Basket</h1>
          </div>
        </div>

        {/* right */}
      </main>
    </div>
  );
}

export default Checkout;
