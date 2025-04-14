// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

const TonConnectUIProvider = dynamic(
  () => import('@tonconnect/ui-react').then(mod => mod.TonConnectUIProvider),
  { ssr: false }
);

const manifestUrl = 'https://gigi-ton-connect.vercel.app/tonconnect-manifest.json';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <Component {...pageProps} />
    </TonConnectUIProvider>
  );
}

export default MyApp;
