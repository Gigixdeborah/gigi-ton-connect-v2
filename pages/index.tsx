import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const tonconnectScript = document.createElement("script");
    tonconnectScript.src = "https://unpkg.com/@tonconnect/sdk@latest/dist/tonconnect-sdk.min.js";
    tonconnectScript.async = true;

    tonconnectScript.onload = () => {
      if (window && "TonConnect" in window) {
        const connector = window.TonConnect({
          manifestUrl: "https://gigi-ton-connect-v2.onrender.com/tonconnect-manifest.json"
        });

        connector.restoreConnection().then(() => {
          if (!connector.connected) {
            connector.connect({ jsBridgeKey: "ton_addr" });
          }
        });
      } else {
        console.error("❌ TonConnect not found in window. SDK failed to load.");
      }
    };

    document.body.appendChild(tonconnectScript);
  }, []);

  return (
    <div className="text-white flex flex-col justify-center items-center min-h-screen bg-black">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Connect Your TON Wallet</h1>
      <p className="mb-2">This page will trigger TON Connect when it loads.</p>
    </div>
  );
}
