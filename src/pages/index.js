import * as React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// markup
const IndexPage = () => {
  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
      <main className="flex flex-col flex-1">
        <div className="min-h-screen py-24 px-4 relative overflow-hidden">
          <title>kraftboy products</title>
          <h1 className="font-serif">kraftboy products - made in america</h1>
          <h2 className="font-serif text-9xl font-extrabold tracking-tightest">
            Compadre
          </h2>
          <h3>The Travel Guitar Stabilizer</h3>
        </div>
        <div className="py-24 px-4">
          <PayPalButtons style={{ layout: "horizontal" }} />
        </div>
      </main>
    </PayPalScriptProvider>
  );
};

export default IndexPage;
