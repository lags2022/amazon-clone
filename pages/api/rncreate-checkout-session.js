const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function checkoutReactNative(req, res) {
  try {
    const { total, items, email } = req.body;
    if (!total || !items.length || !email)
      return res.status(400).json({ message: "data missing" });

    // Use an existing Customer ID if this is a returning customer.
    const customer = await stripe.customers.create();
    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customer.id },
      { apiVersion: "2022-11-15" }
    );

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total * 100,
      currency: "usd",
      customer: customer.id,
      payment_method_types: ["card"],
      metadata: {
        email,
        images: JSON.stringify(items.map((item) => item.image)),
      },
    });

    res.json({
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}
