
import { useEffect, useState } from 'react';

export function EthereumWalletConnect() {
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        setAccount(accounts[0]);
      });
    }
  }, []);

  const connect = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    }
  };

  return (
    <button onClick={connect} className="px-4 py-2 bg-blue-600 rounded-xl shadow">
      {account ? `Connected: ${account.slice(0, 6)}...` : 'Connect EVM Wallet'}
    </button>
  );
}
