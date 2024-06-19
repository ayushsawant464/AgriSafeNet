import { WagmiProvider, useReconnect } from "wagmi";
import { config } from "../config";
import "./App.css";
import { Account } from "../account";
import { WalletOptions } from "../wallet-options";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SendTransaction } from "../send-transaction";
import { ReadContract } from "./read-contract";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { Deposit } from "../deposit";
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
// import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { ConnectKitButton } from "connectkit";
import { useAccount, useDisconnect } from "wagmi";
import { Withdraw } from "../withdraw";
import { useEffect } from "react";
function App() {
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <div className="card">
            {/* <SendTransaction /> */}
            {/* <ReadContract /> */}

            {/* <Withdraw /> */}
            {/* <DynamicContextProvider
              settings={{
                environmentId: "7ff768b0-a743-4919-9a26-c8dde6b14635",
                walletConnectors: [EthereumWalletConnectors],
              }}
            >
              <DynamicWidget />
            </DynamicContextProvider> */}
            <Web3Provider client={queryClient}>
              {/* <MyComponent /> */}
              {/* <ConnectWallet /> */}
              <ConnectKitButton />
              {/* <SignUp></SignUp> */}
            </Web3Provider>
          </div>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}
const queryClient = new QueryClient();
const MyComponent = () => {
  const { isConnecting, isDisconnected, isConnected } = useAccount();

  if (isConnecting) return <div>...</div>;
  if (isConnected)
    return (
      <div>
        <Withdraw />
      </div>
    );
  if (isDisconnected) return <div>..</div>;
};
function ConnectWallet() {
  const { isConnected, isDisconnected } = Account();
  const { disconnect } = useDisconnect();

  if (isConnected) return <WalletOptions />;
  if (isDisconnected) return <button onClick={disconnect}>disconnected</button>;
  return <WalletOptions />;
}
const Web3Provider = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
        <MyComponent />
      </QueryClientProvider>
    </WagmiProvider>
  );
};
export default App;
