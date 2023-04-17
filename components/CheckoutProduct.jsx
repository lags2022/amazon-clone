import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "@/redux/slices/basketSlice";
import getSymbolFromCurrency from "currency-symbol-map";

function CheckoutProduct({
  id,
  price,
  description,
  image,
  title,
  category,
  rating,
  hasPrime,
}) {
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  const addItemToBasket = () => {
    const product = {
      id,
      price,
      image,
      title,
      description,
      category,
      rating,
      hasPrime,
    };
    dispatch(addToBasket(product));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} width={200} height={200} />

      <div className="col-span-3 mx-5">
        <p>{title}</p>
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
        <div className="text-xs my-2 line-clamp-3">{description}</div>
        {getSymbolFromCurrency("USD") + price.toFixed(2)}
        {hasPrime && (
          <div className="flex items-center space-x-2">
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
      </div>

      {/* right add/remove buttons */}

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove to Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
