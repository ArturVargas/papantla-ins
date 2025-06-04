import type { HardhatUserConfig } from "hardhat/config";
import "@parity/hardhat-polkadot";
import "dotenv/config";

const { POLKADOT_RPC_URL, PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  resolc: {
    compilerSource: "npm",
    settings: {
      optimizer: {
        enabled: true,
        parameters: "z",
        fallbackOz: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      polkavm: true,
    },
    polkadotHubTestnet: {
      polkavm: true,
      url: "https://testnet-passet-hub-eth-rpc.polkadot.io",
      accounts: [PRIVATE_KEY as string],
    },
    localNode: {
      polkavm: true,
      url: `http://127.0.0.1:8545`,
    },
  },
};

export default config;
