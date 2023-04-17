import Image from "next/image";
import getSymbolFromCurrency from "currency-symbol-map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/redux/slices/basketSlice";

function Product({ id, price, description, image, title, category, ...props }) {
  const dispatch = useDispatch();
  const MAX_RATING = 5;
  const MIN_RATING = 1;

  const rating =
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING;

  const hasPrime = Math.random() < 0.5;

  const addItemToBasket = () => {
    const product = {
      id,
      price,
      description,
      image,
      title,
      category,
      rating,
      hasPrime,
    };
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <div className="m-auto">
        <Image
          src={image}
          height={200}
          width={200}
          className="object-contain h-52 w-52"
          alt=""
        />
      </div>

      <h4 className="my-3 line-clamp-2">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <FontAwesomeIcon
              className="h-5 text-yellow-500"
              icon={faStar}
              key={i}
            />
          ))
          .concat(
            Array(5 - rating)
              .fill()
              .map((_, i) => (
                <FontAwesomeIcon
                  className="h-5 text-gray-300"
                  icon={faStar}
                  key={i}
                />
              ))
          )}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        {getSymbolFromCurrency("USD") + price.toFixed(2)}
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5 ">
          <Image
            loading="lazy"
            width={100}
            height={100}
            className="w-12"
            src="https://links.papareact.com/fdw"
            alt=""
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button onClick={addItemToBasket} className="mt-auto button">
        Add to basket
      </button>
    </div>
  );
}

export default Product;
