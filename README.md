# Polygon Proof of Stake 

For this project, we will deploy an NFT collection on the Ethereum blockchain, Map the collection to Polygon, and Transfer assets over via the Polygon Bridge.

This repository contains a Solidity smart contract for Space NFTs (Non-Fungible Tokens). The contract is built using the ERC721 standard and extends the functionality with ERC721A, which supports batch minting.
### Requirements 

- Node.js and npm should be installed on your machine.
- Create a `.env` file and set the `PRIVATE_KEY` and other necessary environment variables.
  
## Contract Details

- Contract Name: Space
- Symbol: Spc
 

## Smart Contract Details

The smart contract has the following features:

- Batch minting of NFTs: The contract allows the owner to mint a specified number of Space NFTs in a single transaction using the `mint` function.

- Ownership: The contract inherits from the OpenZeppelin Ownable contract, allowing only the contract owner to mint NFTs.

- Base URI: The `_baseURI` function is overridden to set the base URL for the generated NFTs.

## Deployment

To deploy the Space NFT contract, use the following script:

```bash
npx hardhat run scripts/deploySpace.js --network <NETWORK_NAME>
```

## Minting NFTs

To mint Space NFTs using the deployed contract, use the following script:

```bash
npx hardhat run scripts/mintNFTs.js --network <NETWORK_NAME>
```

## Deposit NFTs to FxChain

To transfer ERC721A tokens (Space NFTs) to the Ethereum FxChain network, use the following script:

```bash
npx hardhat run scripts/depositNFTsToFxChain.js --network <NETWORK_NAME>
```

Note: Replace `<NETWORK_NAME>` with the desired network (e.g., "goerli", "rinkeby", etc.).



## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Author

SOHIT
