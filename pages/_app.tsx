import {
  RainbowKitProvider,
  connectorsForWallets,
  darkTheme
} from "@rainbow-me/rainbowkit";
import { injectedWallet } from "@rainbow-me/rainbowkit/wallets";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { http, WagmiProvider, createConfig } from "wagmi";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { polygonAmoy} from "wagmi/chains";
import { Poppins } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const poppins = Poppins({
  weight: ["400", "600", "700"], // Customize the weights you need
  subsets: ["latin"], // Customize the subsets you need
});

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [injectedWallet],
    },
  ],
  {
    appName: "adwuma",
    projectId: "03c79037fcdf63ebafad8fb366264529",
  }
);

const config = createConfig({
  connectors,
  chains: [ polygonAmoy],
  transports: {
    [polygonAmoy.id]: http(),
  },
});

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme({
          accentColor: 'rgb(46, 0, 57)'
        })} >
          <div className={poppins.className}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </div>
        </RainbowKitProvider>
    </QueryClientProvider>
    </WagmiProvider >
  );
}

export default App;
