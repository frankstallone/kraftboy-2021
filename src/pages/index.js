import * as React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { FUNDING } from "@paypal/sdk-constants/dist/module";

// markup
const IndexPage = () => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": `${process.env.PAYPAL_CLIENT_ID}`,
      }}
    >
      <header className="flex flex-col flex-1">
        <div className="py-24 px-4 relative overflow-hidden">
          <title>kraftboy products</title>
          <h1 className="font-serif">kraftboy products - made in america</h1>
          <h2 className="font-serif text-9xl font-extrabold tracking-tightest">
            Compadre
          </h2>
          <h3>The Travel Guitar Stabilizer</h3>
        </div>
      </header>

      <main className="flex flex-col flex-1 prose">
        <div className="py-24 px-4">
          <h2>Features</h2>
          <ul>
            <li>Lightweight</li>
            <li>Durable</li>
            <li>Waterproof</li>
            <li>Functional</li>
            <li>Attractive</li>
            <li>Affordable</li>
          </ul>
        </div>
        <div className="py-24 px-4">
          <h2>What's up Compadre?</h2>
          <p>
            Looking for a fun, innovative way to store and play your Martin
            Backpacker travel guitar? The Compadre Travel Guitar Stabilizer is a
            simple, lightweight device that allows you to play your guitar
            without a strap hanging over your shoulder and gives you a fun new
            way to store it. Best of all, the Compadre attaches to any Martin
            Backpacker in seconds and weighs just six ounces! Enjoy the world’s
            most popular travel guitar now more than ever.
          </p>
        </div>
        <div className="py-24 px-4">
          <h2>Testimonials</h2>
        </div>
        <div className="py-24 px-4">
          <h2>Order</h2>
          <p>
            The Compadre is affordable, lightweight and priced just right at
            $49.99 (shipping included) to anywhere in the United States!
            Interested in international shipping? <a href="#">Contact us!</a>
          </p>
          <PayPalButtons
            style={{ layout: "horizontal" }}
            fundingSource={FUNDING.PAYPAL}
          />
        </div>
      </main>

      <footer className="flex flex-col flex-1 prose">
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
            Copyright 2011 - 2021 © Kraftboy. "The Compadre Travel Guitar
            Stabilizer" is patent-pending. Web design by Hoverboard Media. "The
            Compadre Travel Guitar Stabilizer", the photos, videos, media and
            Kraftboy are in no way affiliated with Martin Guitars, unless your
            Chris Martin then let's talk!
          </small>
        </p>
      </footer>
    </PayPalScriptProvider>
  );
};

export default IndexPage;
