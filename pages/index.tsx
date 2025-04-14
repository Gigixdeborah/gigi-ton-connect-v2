// pages/index.tsx
import Head from "next/head";
import { useEffect } from "react";
import { TonConnectButton, TonConnectUIProvider } from "@tonconnect/ui-react";

export default function Home() {
  useEffect(() => {
    async function initTon() {
      const { TonConnect } = await import("@tonconnect/sdk");

      const connector = new TonConnect({
        manifestUrl: "https://gigi-ton-connect-v2.onrender.com/tonconnect-manifest.json"
      });

      await connector.restoreConnection();

      if (!connector.connected) {
        await connector.connect({ jsBridgeKey: "ton_addr" }).catch(console.error);
      }
    }

    initTon();
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

