// pages/index.tsx
import Head from "next/head";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useEffect } from "react";
import { TonConnect } from "@tonconnect/sdk";

export default function Home() {
  useEffect(() => {
    const connector = new TonConnect({
      manifestUrl: "https://gigi-ton-connect-v2.onrender.com/tonconnect-manifest.json"
    });

    connector.restoreConnection().then(() => {
      if (!connector.connected) {
        connector.connectWallet().catch(console.error);
      }
    });
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
        <div className="space-y-4">
          <TonConnectButton />
          <button
            className="bg-purple-600 px-4 py-2 rounded text-white"
            onClick={handleEvmConnect}
          >
            Connect MetaMask
          </button>
          <button
            className="bg-blue-600 px-4 py-2 rounded text-white"
            onClick={handleSolanaConnect}
          >
            Connect Phantom
          </button>
        </div>
      </main>
    </>
  );
}
