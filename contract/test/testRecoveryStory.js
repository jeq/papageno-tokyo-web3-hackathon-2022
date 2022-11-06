// testRecoveryStory.js
const main = async () => {
    const [owner, userAddress1, userAddress2] = await hre.ethers.getSigners();
    const RecoveryStoryContractFactory = await hre.ethers.getContractFactory("RecoveryStory");
    const RecoveryStoryContract = await RecoveryStoryContractFactory.deploy();
    await RecoveryStoryContract.deployed();
    console.log("Contract deployed to:", RecoveryStoryContract.address);


    const createUserProfile = await RecoveryStoryContract.createUserProfile(
        "cardene",
        1,

    );
    console.log(createUserProfile);
    console.log("createUserProfileの実行完了!")

    const createUserProfile = await RecoveryStoryContract.createUserProfile();
    console.log(createUserProfile);
    console.log("createUserProfileの実行完了!")




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
