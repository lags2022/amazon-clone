import Image from "next/image";
import CurrencyInput from "react-currency-input-field";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Product({ id, price, description, image, title, category, ...props }) {
  const MAX_RATING = 5;
  const MIN_RATING = 1;

  const rating =
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING;

  const hasPrime = Math.random() < 0.5;

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <Image
        src={image}
        height={200}
        width={200}
        className="object-contain h-52 w-52"
      />

      <h4 className="my-3 line-clamp-2">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map(() => (
            <FontAwesomeIcon className="h-5 text-yellow-500" icon={faStar} />
          ))
          .concat(
            Array(5 - rating)
              .fill()
              .map(() => (
                <FontAwesomeIcon className="h-5 text-gray-300" icon={faStar} />
              ))
          )}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <CurrencyInput
          name="price_name"
          defaultValue={price}
          fixedDecimalLength={2}
          decimalsLimit={2}
          prefix="$"
          decimalSeparator="."
          groupSeparator=","
        />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5 ">
          <Image
            width={100}
            height={100}
            className="w-12"
            src="https://links.papareact.com/fdw"
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add to basket</button>
    </div>
  );
}

export default Product;
