import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import CurrencyInput from "react-currency-input-field";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ price, description, image, title, category, ...props }) {
  const rating =
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING;

  const hasPrime = Math.random() < 0.5;

  return (
    <div>
      <p>{category}</p>
      <Image src={image} height={200} width={200} />
      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5" />
          ))}
      </div>
      <p>{description}</p>
      <div>
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
        <div>
          <img src="https://links.papareact.com/fdw" alt="" />
          <p>FREE Next-day Delivery</p>
        </div>
      )}
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
