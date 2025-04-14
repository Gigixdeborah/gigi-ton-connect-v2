// pages/index.tsx
import Head from "next/head";
import { TonConnectButton } from "@tonconnect/ui-react";

export default function Home() {
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
          🔗 Connect Your Wallet
        </h1>

        <div className="flex flex-col space-y-4 w-full max-w-xs">
          {/* TON Connect Button */}
          <TonConnectButton className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded text-center" />

          {/* EVM Wallet Connect */}
          <button
            onClick={handleEvmConnect}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
          >
            🟣 Connect MetaMask
          </button>

          {/* Solana Wallet Connect */}
          <button
            onClick={handleSolanaConnect}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded"
          >
            🟡 Connect Phantom Wallet
          </button>
        </div>

        <p className="text-gray-400 mt-6 text-sm text-center">
          Powered by <b>Gigi Labs</b> — Secure wallet integration for Web3.
        </p>
      </main>
    </>
  );
}
