import { buffer } from "micro";
import * as admin from "firebase-admin";

//secure a conection to FIREBASE from the backend
const servicesAccount = require("../../permissions.json"); //este permission.json son los credendicales para autenticar la conexion a firebase
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(servicesAccount),
    })
  : admin.app();

//establish connection to stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session) => {
  //console.log("Fulfilling order", session)

  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: (session.amount_total || session.amount) / 100,
      amount_shipping: (session.total_details?.amount_shipping || 555) / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`SUCESS: Order ${session.id} has been added to the DB`);
    });
};

export default async function webhook(req, res) {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (error) {
      return res.status(400).send(`Webhook error: ${error.message}`);
    }

    if (
      event.type === "payment_intent.succeeded" ||
      event.type === "checkout.session.completed"
    ) {
      //handle the checkout.session.completed event
      const session = event.data.object;

      //Fulfill the order...
      return fulfillOrder(session)
        .then(() => res.status(200).end())
        .catch((error) =>
          res.status(400).send(`Webhook error: ${error.message}`)
        );
    }
  }
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
