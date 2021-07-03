import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { FUNDING } from "@paypal/sdk-constants/dist/module";

const baseOrderAmount = "34.99";
const shippingAmount = "20.00";

// markup
const IndexPage = () => {
  // false is righty, true is lefty
  const [orientation, setOrientation] = useState(false);
  // false is white, true is black
  const [color, setColor] = useState(false);

  return (
    <PayPalScriptProvider
      options={{
        "client-id": `${process.env.PAYPAL_CLIENT_ID}`,
      }}
    >
      <header className="max-w-2xl mx-auto flex flex-col flex-1">
        <div className="py-24 px-4 relative overflow-hidden">
          <title>kraftboy products</title>
          <h1 className="font-serif">kraftboy products - made in america</h1>
          <h2
            className="font-serif"
            className="font-serif text-8xl md:text-9xl font-extrabold tracking-tightest"
          >
            Compadre
          </h2>
          <h3>The Travel Guitar Stabilizer</h3>
        </div>
      </header>

      <main className="max-w-2xl mx-auto flex flex-col flex-1 prose">
        <div className="py-4 px-4 flex flex-row space-x-10 md:space-x-20">
          <div>
            <h2 className="font-serif">Features</h2>
            <ul>
              <li>Lightweight</li>
              <li>Durable</li>
              <li>Waterproof</li>
              <li>Functional</li>
              <li>Attractive</li>
              <li>Affordable</li>
            </ul>
          </div>
          <div>
            <h2 className="font-serif">What's up Compadre?</h2>
            <p>
              Looking for a fun, innovative way to store and play your Martin
              Backpacker travel guitar? The Compadre Travel Guitar Stabilizer is
              a simple, lightweight device that allows you to play your guitar
              without a strap hanging over your shoulder and gives you a fun new
              way to store it. Best of all, the Compadre attaches to any Martin
              Backpacker in seconds and weighs just six ounces! Enjoy the
              world’s most popular travel guitar now more than ever.
            </p>
          </div>
        </div>
        <div className="py-4 px-4">
          <h2 className="font-serif">Order</h2>
          <p>
            The Compadre is affordable, lightweight and priced just right at $
            {baseOrderAmount} shipped anywhere in the United States!
            International shipping ${shippingAmount}.
          </p>
          <p className="font-bold">
            Orientation: {orientation ? "Lefty" : "Righty"}
          </p>
          <button
            className="bg-gradient-to-r from-yellow-300 to-yellow-500 px-4 py-2 rounded font-medium text-gray-900"
            onClick={() => setOrientation(!orientation)}
          >
            Change Orientation
          </button>
          <p className="font-bold">Color: {color ? "White" : "Black"}</p>
          <button
            className="bg-gradient-to-r from-yellow-300 to-yellow-500 px-4 py-2 rounded font-medium text-gray-900"
            onClick={() => setColor(!color)}
          >
            Change Color
          </button>
          <PayPalButtons
            style={{ layout: "horizontal" }}
            fundingSource={FUNDING.PAYPAL}
            onShippingChange={(data, actions) => {
              if (data.shipping_address.country_code !== "US") {
                console.log("International: ", data);
                // Patch the shipping amount
                return actions.order.patch([
                  {
                    op: "replace",
                    path: "/purchase_units/@reference_id=='default'/amount",
                    value: {
                      currency_code: "USD",
                      value: (
                        parseFloat(baseOrderAmount) + parseFloat(shippingAmount)
                      ).toFixed(2),
                      breakdown: {
                        item_total: {
                          currency_code: "USD",
                          value: baseOrderAmount,
                        },
                        shipping: {
                          currency_code: "USD",
                          value: shippingAmount,
                        },
                      },
                    },
                  },
                ]);
              }
              console.log("US");

              return actions.resolve();
            }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: baseOrderAmount,
                    },
                  },
                ],
              });
            }}
          />
        </div>
      </main>

      <footer className="max-w-2xl mx-auto py-4 px-4 flex flex-col flex-1 prose">
        <p>
          We’d love to hear from you if you would like to buy in bulk or have
          any questions or comments. Send us an email, or find us on{" "}
          <a href="https://www.facebook.com/pages/Kraftboy/206998916008526">
            facebook
          </a>
          , and <a href="https://twitter.com/kraftboyusa">twitter</a>.
        </p>
        <p>
          <small>
            Copyright 2011 - {new Date().getFullYear()} © Kraftboy. "The
            Compadre Travel Guitar Stabilizer" is patent-pending. Web design by
            Hoverboard Media. "The Compadre Travel Guitar Stabilizer", the
            photos, videos, media and Kraftboy are in no way affiliated with
            Martin Guitars, unless your Chris Martin then let's talk!
          </small>
        </p>
      </footer>
    </PayPalScriptProvider>
  );
};

export default IndexPage;
