const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function checkout(req, res) {
  try {
    if (req.method === "POST") {
      // Permitir solicitudes POST desde cualquier origen
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "POST");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");

      console.log("BODY", req.body);
      const { items, email } = req.body;

      const transformedItems = items.map((item) => ({
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: item.price * 100,
          product_data: {
            name: item.title,
            description: item.description,
            images: [item.image],
          },
        },
      }));

      console.log("no pasa");

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_options: [
          {
            shipping_rate: "shr_1My1dOEfYxNbjr9ymfol5jXy",
          },
        ],
        shipping_address_collection: {
          allowed_countries: ["GB", "US", "CA"],
        },
        line_items: transformedItems,
        mode: "payment",
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
          email,
          images: JSON.stringify(items.map((item) => item.image)),
        },
      });

      res.status(200).json({ id: session.id });
    }
  } catch (error) {
    console.log("FUCKING ERROR", error.message);
    res.status(400).json({ error: error.message });
  }
}
