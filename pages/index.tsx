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
          Connect Your Wallet
        </h1>

        <div className="flex flex-col gap-4 items-center">
          <TonConnectButton />

          <button
            onClick={handleEvmConnect}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl transition-all"
          >
            Connect EVM Wallet
          </button>

          <button
            onClick={handleSolanaConnect}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-xl transition-all"
          >
            Connect Solana Wallet
          </button>
        </div>

        <p className="mt-12 text-sm text-gray-400">
          Powered by GigiP2Bot •{" "}
          <a
            href="https://gigi-ton-connect-r6ygrprjb-gigi-labs.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Live App
          </a>
        </p>
      </main>
    </>
  );
}
