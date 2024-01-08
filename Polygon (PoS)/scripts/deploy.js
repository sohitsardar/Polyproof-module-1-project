const { ethers } = require("hardhat");

async function main() {
  const MyContract = await ethers.getContractFactory("Space");
  const deployedContract = await MyContract.deploy(); // Deploy the contract

  
  await deployedContract.deployed();

  console.log("CONTRACT Deployed at ADDRESS:", deployedContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
