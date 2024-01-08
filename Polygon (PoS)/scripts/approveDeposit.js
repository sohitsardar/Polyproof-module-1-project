const { ethers } = require("hardhat");
const  {FXRootContractAbi}  = require("../artifacts/fxRootContractAbi.js");
const ABI = require("../artifacts/contracts/Space.sol/Space.json");
require("dotenv").config();

//Transfer ERC721A tokens to the Ethereum FxChain network
async function main() {
  // Set up connections to network and wallet
  const networkAddress = "https://eth-goerli.g.alchemy.com/v2/D_PyGF3XnRQgl4o37wQT-9kb452mYBlB";
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const gasPrice = await provider.getGasPrice();

  const increasedGasPrice = gasPrice.mul(ethers.BigNumber.from(150)).div(ethers.BigNumber.from(100));



  // Create a wallet instance
  const wallet = new ethers.Wallet(privateKey, provider);

  // Get the signer instance
  const [signer] = await ethers.getSigners();

  // Get ERC721A contract instance
  const NFT = await ethers.getContractFactory("Space");
  const nft = await NFT.attach("0x8fCDEb66A95b0DC946d119488bCD4a14d0c5162f");

  // Get FXRoot contract instance
  const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  // TokenIds to transfer
  const tokenIds = [0, 1, 2, 3, 4];

  // Approve the nfts for transfer
  const approveTx = await nft
    .connect(signer)
    .setApprovalForAll(fxRootAddress, true, { gasPrice: increasedGasPrice });
  await approveTx.wait();
  console.log("Approval confirmed");

  // Deposit the nfts to the FXRoot contracts
  for (let i = 0; i < tokenIds; i++) {
    const depositTx = await fxRoot
      .connect(signer)
      .deposit(nft.address, wallet.address, tokenIds[i], "0x6566");

    // Wait for the deposit to be confirmed
    await depositTx.wait();
  }

  console.log("Approved and deposited");

  // Test balanceOf
  const balance = await nft.balanceOf(wallet.address);

  // Print the balance of the wallet
  console.log( "balance of nfts Wallet", wallet.address, "is: ", balance.toString() );
}

// Call the main function and handle any errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });