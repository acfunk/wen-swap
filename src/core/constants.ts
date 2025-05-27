import useConnectionStore from "../store/connectionStore";

// NODE
const MAINNET_ALGONODE_NODE = "https://mainnet-api.algonode.cloud";
const TESTNET_ALGONODE_NODE = "https://testnet-api.algonode.cloud";

// INDEXER
const MAINNET_ALGONODE_INDEXER = "https://mainnet-idx.algonode.cloud";
const TESTNET_ALGONODE_INDEXER = "https://testnet-idx.algonode.cloud";

export const NODE_URL =
  useConnectionStore.getState().networkType === "mainnet"
    ? MAINNET_ALGONODE_NODE
    : TESTNET_ALGONODE_NODE;
export const INDEXER_URL =
  useConnectionStore.getState().networkType === "mainnet"
    ? MAINNET_ALGONODE_INDEXER
    : TESTNET_ALGONODE_INDEXER;

export const IPFS_ENDPOINT = "https://ipfs.algonode.xyz/ipfs";

export const TX_NOTE = "via wen.tools | wen swap";

export const MAX_SWAP_TRANSACTIONS = 16;
export const SHARE_TRANSACTION_RECEIVER_ADDRESS =
  "RBZ4GUE7FFDZWCN532FFR5AIYJ6K4V2GKJS5B42JPSWOAVWUT4OHWG57YQ";

export const TRANSACTION_TYPES = [
  {
    label: "Payment",
    type: "pay",
  },
  {
    label: "Asset Transfer",
    type: "axfer",
  },
  {
    label: "Opt-In",
    type: "optin",
  },
];
