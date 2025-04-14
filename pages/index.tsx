// pages/index.tsx
import Head from "next/head";
import { useEffect } from "react";
import { TonConnectUIProvider, TonConnectButton } from "@tonconnect/ui-react";

export default function Home() {
  useEffect(() => {
    const tonconnectScript = document.createElement("script");
    tonconnectScript.src = "https://unpkg.com/@tonconnect/sdk@latest/dist/tonconnect-sdk.min.js";
    tonconnectScript.async = true;
    tonconnectScript.onload = () => {
      const connector = new window.TonConnectSDK.TonConnect({
        manifestUrl: "https://gigi-ton-connect-v2.onrender.com/tonconnect-manifest.json"
      });

      // Automatically trigger connection for Telegram Wallet
      connector.restoreConnection().then(() => {
        if (!connector.connected) {
          connector.connect({ jsBridgeKey: 'ton_addr' }).catch(console.error);
        }
      });
    };
    document.body.appendChild(tonconnectScript);
  }, []);

  return (
    <>
      <Head>
        <title>Gigi Connect</title>
        <meta name="description" content="Connect your TON wallet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          TON Wallet Connection
        </h1>
        <TonConnectUIProvider manifestUrl="https://gigi-ton-connect-v2.onrender.com/tonconnect-manifest.json">
          <TonConnectButton />
        </TonConnectUIProvider>
      </main>
    </>
  );
}
