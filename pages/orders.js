import Header from "@/components/Header";
import { getSession, useSession } from "next-auth/react";
import React from "react";
import moment from "moment";
import db from "@/firebase_db";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import Order from "@/components/Order";

function Orders({ orders }) {
  const { data: session } = useSession();

  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your Orders
        </h1>
        {session ? (
          <h2>{orders.length} Orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}

        <div className="mt-5 space-y-4">
          {orders?.map(
            ({ id, amount, amountShipping, items, timestamp, images }) => (
              <Order
                key={id}
                id={id}
                amount={amount}
                amountShipping={amountShipping}
                items={items}
                timestamp={timestamp}
                images={images}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
}

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  //Get the users logged in credentials...
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  //firebase db ---> usando v.8 firebase
  // const stripeOrders = await db
  //   .collection("users")
  //   .doc(session.user.email)
  //   .collection("orders")
  //   .orderBy("timestamp", "desc")
  //   .get();

  //firebase db ---> usando v.9 firebase
  const ordersCollection = collection(
    db,
    "users",
    session.user.email,
    "orders"
  );
  const ordersQuery = query(ordersCollection, orderBy("timestamp", "desc"));
  const stripeOrders = await getDocs(ordersQuery);

  //stripe orders
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: order.data().images,
      //  (
      //       await stripe.checkout.sessions.listLineItems(order.id, {
      //         limit: 100,
      //       })
      //     ).data,
    }))
  );

  return {
    props: {
      orders,
    },
  };
}
