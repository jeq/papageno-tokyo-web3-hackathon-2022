// run.js
const main = async () => {
  const [owner, userAddress1, userAddress2] = await hre.ethers.getSigners();
  const RecoveryStoryContractFactory = await hre.ethers.getContractFactory("RecoveryStory");
  const RecoveryStoryContract = await RecoveryStoryContractFactory.deploy();
  await RecoveryStoryContract.deployed();
  console.log("Contract deployed to:", RecoveryStoryContract.address);
  // makeAnEpicNFT 関数を呼び出す。NFT が Mint される。
  let txn = await RecoveryStoryContract.mintNFT();
  // Minting が仮想マイナーにより、承認されるのを待つ。
  await txn.wait();
};
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
runMain();
