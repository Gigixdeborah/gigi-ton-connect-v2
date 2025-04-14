// pages/index.tsx
import Head from "next/head";
import { TonConnectUIProvider, TonConnectButton } from "@tonconnect/ui-react";

export default function Home() {
  const handleEvmConnect = () => {
    window.open("https://metamask.io/", "_blank");
  };

  const handleSolanaConnect = () => {
    window.open("https://phantom.app/", "_blank");
  };

  return (
    <TonConnectUIProvider
      manifestUrl="https://gigi-ton-connect-v2.onrender.com/tonconnect-manifest.json"
    >
      <Head>
        <title>Gigi Connect</title>
        <meta name="description" content="Connect your wallets easily" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Connect Your Wallet
        </h1>

        <div className="flex flex-col gap-4 items-center">
          {/* TON Connect */}
          <TonConnectButton />

          {/* MetaMask */}
          <button
            onClick={handleEvmConnect}
            className="bg-purple-600 px-4 py-2 rounded-md"
          >
            Connect MetaMask (EVM)
          </button>

          {/* Phantom */}
          <button
            onClick={handleSolanaConnect}
            className="bg-pink-500 px-4 py-2 rounded-md"
          >
            Connect Phantom (Solana)
          </button>
        </div>
      </main>
    </TonConnectUIProvider>
  );
}
