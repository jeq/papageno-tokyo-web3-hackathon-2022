// deploy.js
const main = async () => {
  // コントラクトがコンパイルします
  // コントラクトを扱うために必要なファイルが `artifacts` ディレクトリの直下に生成されます。
  const RecoveryStoryContractFactory = await hre.ethers.getContractFactory(
    "RecoveryStory"
  );
  // Hardhat がローカルの Ethereum ネットワークを作成します。
  const RecoveryStoryContract = await RecoveryStoryContractFactory.deploy();
  // コントラクトが Mint され、ローカルのブロックチェーンにデプロイされるまで待ちます。
  await RecoveryStoryContract.deployed();
  console.log("Contract deployed to:", RecoveryStoryContract.address);

};
// エラー処理を行っています。
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
