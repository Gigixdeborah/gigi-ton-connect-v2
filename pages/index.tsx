// pages/index.tsx
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const tonconnectScript = document.createElement("script");
    tonconnectScript.src = "https://unpkg.com/@tonconnect/sdk@latest/dist/tonconnect-sdk.min.js";
    tonconnectScript.async = true;

    tonconnectScript.onload = () => {
      if (window && "TonConnectSDK" in window) {
        const connector = new window.TonConnectSDK.TonConnect({
          manifestUrl: "https://gigi-ton-connect-v2.onrender.com/tonconnect-manifest.json",
        });

        connector.restoreConnection().then(() => {
          if (!connector.connected) {
            connector.connect({ jsBridgeKey: "ton_addr" });
          }
        });
      } else {
        console.error("❌ TonConnectSDK not available in window.");
      }
    };

    document.body.appendChild(tonconnectScript);
  }, []);

  return (
    <main>
      <h1>TON Connect is Live 🚀</h1>
    </main>
  );
}
