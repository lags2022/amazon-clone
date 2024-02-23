import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "@/redux/slices/basketSlice";
import CheckoutProduct from "@/components/CheckoutProduct";
import { useSession } from "next-auth/react";
import getSymbolFromCurrency from "currency-symbol-map";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { getAuth } from "firebase/auth";

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();
  const auth = getAuth();
  const user = auth.currentUser;

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    //call the backend to create a checkout session
    const checkoutSession = await axios.post("api/create-checkout-session", {
      items,
      email: session?.user?.email || user?.email,
    });

    //redirect user/customer to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto ">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            className=" object-contain"
            src="https://links.papareact.com/ikj"
            width={800}
            height={203}
            alt=""
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {!items.length
                ? "Your Amazon Basket is empty"
                : "Shopping Basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                price={item.price}
                description={item.description}
                image={item.image}
                title={item.title}
                category={item.category}
                hasPrime={item.hasPrime}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):
                <span className="font-bold">
                  {getSymbolFromCurrency("USD") + total.toFixed(2)}
                </span>
              </h2>

              <button
                role="link"
                onClick={createCheckoutSession}
                disabled={!session && !user}
                className={`button mt-2 ${
                  !session &&
                  !user &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session && !user
                  ? "Sign in to Checkout"
                  : "Proceed to Checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
