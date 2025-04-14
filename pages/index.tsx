// pages/index.tsx
import Head from "next/head";
import { useEffect } from "react";
import { TonConnectButton } from "@tonconnect/ui-react";

export default function Home() {
  useEffect(() => {
    async function initTon() {
      const { TonConnect } = await import("@tonconnect/sdk");

      const connector = new TonConnect({
        manifestUrl: "https://gigi-ton-connect-v2.onrender.com/tonconnect-manifest.json"
      });

      await connector.restoreConnection();

      if (!connector.connected) {
        try {
          await connector.connect({ jsBridgeKey: "ton_addr" });
        } catch (error) {
          console.error("TON connect failed:", error);
        }
      }
    }

    initTon();
  }, []);

  const handleEvmConnect = () => {
    window.open("https://metamask.io/", "_blank");
  };

  const handleSolanaConnect = () => {
    window.open("https://phantom.app/", "_blank");
  };

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

        <TonConnectButton />

        <div className="mt-6 space-y-3 w-full max-w-sm">
          <button
            onClick={handleEvmConnect}
            className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded"
          >
            🔗 Connect MetaMask (EVM)
          </button>
          <button
            onClick={handleSolanaConnect}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
          >
            🔗 Connect Phantom (Solana)
          </button>
        </div>
      </main>
    </>
  );
}
