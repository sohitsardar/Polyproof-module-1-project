// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// This script batch mints criceket ERC721A tokens.

// Import required libraries
const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  // Get private key from env
  const privateKey = process.env.PRIVATE_KEY;

  // The URL of the network provider
  const networkAddress = "https://eth-goerli.g.alchemy.com/v2/D_PyGF3XnRQgl4o37wQT-9kb452mYBlB";

  // Create a provider using the URL
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  // Create a signer from the private key and provider
  const signer = new ethers.Wallet(privateKey, provider);

  // Tthe address of the deployed contract
  const contractAddress = "0x8fCDEb66A95b0DC946d119488bCD4a14d0c5162f";

  // Get the contract factory and attach it to the signer
  const NFTs = await ethers.getContractFactory("Space", signer);
  const contract = await NFTs.attach(contractAddress);

  // Call the mint function on the contract to mint 5 tokens
  await contract.mint(5);

  // Log a message to the console to indicate that the tokens have been minted
  console.log("NFTs Minted");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });