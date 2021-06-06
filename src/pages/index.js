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
      <main className="flex flex-col flex-1">
        <div className="py-24 px-4 relative overflow-hidden">
          <title>kraftboy products</title>
          <h1 className="font-serif">kraftboy products - made in america</h1>
          <h2 className="font-serif text-9xl font-extrabold tracking-tightest">
            Compadre
          </h2>
          <h3>The Travel Guitar Stabilizer</h3>
        </div>
        <div className="py-24 px-4">
          <PayPalButtons
            style={{ layout: "horizontal" }}
            fundingSource={FUNDING.PAYPAL}
          />
        </div>
      </main>
    </PayPalScriptProvider>
  );
};

export default IndexPage;
