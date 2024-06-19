import { createConfig, http } from "wagmi";
import { mainnet, sepolia, polygonMumbai } from "wagmi/chains";
import { metaMask, injected } from "wagmi/connectors";

import { ConnectKitProvider, getDefaultConfig } from "connectkit";

export const config = createConfig({
  chains: [polygonMumbai],
  connectors: [metaMask(), injected()],
  transports: {
    // [mainnet.id]: http(),
    // [sepolia.id]: http(),
    [polygonMumbai.id]: http(),
  },
  walletConnectProjectId: "612ffea4bcb190ae7fe209a0a55ad5b6",
  appName: "blocktik",
});
// export const config = createConfig({
//   autoConnect: true,
//   connectors: [
//     injected({
//       options: {
//         name: "Injected",
//         shimDisconnect: true,
//       },
//     }),
//   ],
// });
