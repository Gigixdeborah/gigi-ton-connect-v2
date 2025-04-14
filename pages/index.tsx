import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const tonconnectScript = document.createElement("script");
    tonconnectScript.src = "https://unpkg.com/@tonconnect/sdk@latest/dist/tonconnect-sdk.min.js";
    tonconnectScript.async = true;

    tonconnectScript.onload = () => {
      const connector = new window.TonConnectSDK.TonConnect({
        manifestUrl: "https://gigi-ton-connect-v2.onrender.com/tonconnect-manifest.json"
      });

      // Automatically request wallet connection if in Telegram environment
      connector.restoreConnection().then(() => {
        if (!connector.connected) {
          connector.connect({ jsBridgeKey: "ton_addr" }); // required for Telegram
        }
      });
    };

    document.body.appendChild(tonconnectScript);
  }, []);

  return (
    <>
      <Head>
        <title>Gigi Connect</title>
        <meta name="description" content="Connect your wallets easily" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Connect Your Wallet
        </h1>
        <p className="text-center text-gray-400">
          If you're using Telegram Wallet, the connection request should pop up shortly.
        </p>
      </main>
    </>
  );
}
