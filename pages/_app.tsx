import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { TonConnectUIProvider } from '@tonconnect/ui-react/dist/TonConnectUIProvider.js';

const manifestUrl = 'https://gigi-ton-connect-v2.onrender.com/tonconnect-manifest.json';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <Component {...pageProps} />
    </TonConnectUIProvider>
  );
}

export default MyApp;

