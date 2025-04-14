
import { useEffect, useState } from 'react';

export function SolanaWalletConnect() {
  const [wallet, setWallet] = useState<any>(null);
  const [publicKey, setPublicKey] = useState<string | null>(null);

  useEffect(() => {
    if ('solana' in window) {
      const provider = (window as any).solana;
      if (provider.isPhantom) {
        setWallet(provider);
      }
    }
  }, []);

  const connect = async () => {
    const resp = await wallet.connect();
    setPublicKey(resp.publicKey.toString());
  };

  return (
    <button onClick={connect} className="px-4 py-2 bg-purple-600 rounded-xl shadow">
      {publicKey ? `Connected: ${publicKey.slice(0, 6)}...` : 'Connect Solana Wallet'}
    </button>
  );
}
