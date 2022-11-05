// deploy.js
const main = async () => {
  // コントラクトがコンパイルします
  // コントラクトを扱うために必要なファイルが `artifacts` ディレクトリの直下に生成されます。
  const RecoveryStoryContractFactory = await hre.ethers.getContractFactory("Story");
  // Hardhat がローカルの Ethereum ネットワークを作成します。
  const RecoveryStoryContract = await RecoveryStoryContractFactory.deploy();
  // コントラクトが Mint され、ローカルのブロックチェーンにデプロイされるまで待ちます。
  await RecoveryStoryContract.deployed();
  console.log("Contract deployed to:", RecoveryStoryContract.address);
  // makeAnEpicNFT 関数を呼び出す。NFT が Mint される。
  let txn = await RecoveryStoryContract.mintNFT("私のストーリー");
  // Minting が仮想マイナーにより、承認されるのを待ちます。
  await txn.wait();
  console.log("Minted NFT #1");
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
