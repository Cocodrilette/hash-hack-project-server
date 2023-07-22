export const contractConstants = {
  address: "0xA09FdA0FD1fB55757a76385A4CA700F216327B87",
  abi: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "RevealDoesNotMatch",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "hash",
          type: "bytes32",
        },
      ],
      name: "TickerExpired",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "newInspector",
          type: "address",
        },
      ],
      name: "InspestorAuthorized",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "hash",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "blockNumber",
          type: "uint256",
        },
      ],
      name: "MakeCommit",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "hash",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "blockNumber",
          type: "uint256",
        },
      ],
      name: "MakeReveal",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "addr",
          type: "address",
        },
      ],
      name: "authorizeInspector",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "authorizedInspectors",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "hashOfOrder",
          type: "bytes32",
        },
      ],
      name: "commit",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      name: "commitments",
      outputs: [
        {
          internalType: "bytes32",
          name: "hash",
          type: "bytes32",
        },
        {
          internalType: "bool",
          name: "revealed",
          type: "bool",
        },
        {
          internalType: "uint256",
          name: "blockId",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getHashes",
      outputs: [
        {
          internalType: "bytes32[]",
          name: "",
          type: "bytes32[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "hashes",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "tickerSymbol",
          type: "string",
        },
        {
          internalType: "string",
          name: "orderType",
          type: "string",
        },
        {
          internalType: "string",
          name: "accountType",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "quantity",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "price",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "timeInForce",
          type: "uint256",
        },
        {
          internalType: "enum Controller.Direction",
          name: "direction",
          type: "uint8",
        },
      ],
      name: "reveal",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      name: "reveals",
      outputs: [
        {
          internalType: "string",
          name: "tickerSymbol",
          type: "string",
        },
        {
          internalType: "string",
          name: "orderType",
          type: "string",
        },
        {
          internalType: "string",
          name: "accountType",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "quantity",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "price",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "timeInForce",
          type: "uint256",
        },
        {
          internalType: "enum Controller.Direction",
          name: "direction",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
};
