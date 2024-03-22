const hre = require("hardhat");
require("@nomicfoundation/hardhat-verify");

async function main() {
  const crop = await hre.ethers.deployContract("Crop");
  await crop.waitForDeployment();
  console.log(crop.address);

  await hre.run("verify:verify", {
    address: crop.address,
    apiKey: process.env.ETHERSCAN_API_KEY,
    constructorArguments: [],
  });
  //contract address: 0xa0bAf2C4F8Daf5913a9e5BE6046E065aB7fC5ee2
}

main();
