import React from "react";
import moment from "moment";
import getSymbolFromCurrency from "currency-symbol-map";
import Image from "next/image";

function Order({ id, amount, amountShipping, items, timestamp, images }) {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{moment.unix(timestamp).format("DD MMMM YYYY")}</p>
        </div>

        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>
            {`${getSymbolFromCurrency(
              "USD"
            )}${amount} - Next Day Delivery ${getSymbolFromCurrency(
              "USD"
            )}${amountShipping}`}
          </p>
        </div>

        <p className="text-sm whitespace-nowrap sm:text-lg self-end flex-1 text-right text-blue-500">
          {items.length} items
        </p>

        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap ">
          ORDER # {id}
        </p>
      </div>

      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((image, i) => (
            <Image
              key={i}
              className="h-20 object-contain sm:h-32"
              src={image}
              width={200}
              height={200}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
