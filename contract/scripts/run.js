// testRecoveryStory.js

// const hre = require("hardhat");

const main = async () => {
    const [owner, userAddress1, userAddress2] = await hre.ethers.getSigners();
    const RecoveryStoryContractFactory = await hre.ethers.getContractFactory("RecoveryStory");
    const RecoveryStoryContract = await RecoveryStoryContractFactory.deploy();
    await RecoveryStoryContract.deployed();
    console.log("Contract deployed to:", RecoveryStoryContract.address);

    console.log(owner.address, userAddress1.address)

    const createUserProfile = await RecoveryStoryContract.createUserProfile(
        "cardene",
        "cardene profile",
        1
    );
    console.log(createUserProfile);
    console.log("createUserProfileの実行完了!")

    const getAllAvatar = await RecoveryStoryContract.getAllAvatar();
    console.log(getAllAvatar);
    console.log("getAllAvatarの実行完了!")

    const editUserProfile = await RecoveryStoryContract.editUserProfile(
        "cardene 2",
        "cardene profile 2",
        2
    );
    console.log(editUserProfile);
    console.log("editUserProfileの実行完了!")

    const getUserProfile = await RecoveryStoryContract.getUserProfile();
    console.log(getUserProfile);
    console.log("getUserProfileの実行完了!")

    const getAuthor = await RecoveryStoryContract.getAuthor(owner.address);
    console.log(getAuthor);
    console.log("getAuthorの実行完了!")

    const createStory = await RecoveryStoryContract.createStory(
        "cardene story",
        ["tag1", "tag2"],
        "cardene story"
    );
    console.log(createStory);
    console.log("createStoryの実行完了!")

    const editStory = await RecoveryStoryContract.editStory(
        "cardene Title",
        ["tag1", "tag2", "tags3"],
        "cardene story edited",
        1
    );
    console.log(editStory);
    console.log("editStoryの実行完了!")


    const addLike = await RecoveryStoryContract.addLike(1);
    console.log(addLike);
    console.log("addLikeの実行完了!")

    
    const buyNft = await RecoveryStoryContract.connect(userAddress2).buyNft(
        0,
        1,
        { value: ethers.utils.parseEther("0.5") }
    );
    console.log(buyNft);
    console.log("buyNftの実行完了!")

    const getAllStories = await RecoveryStoryContract.getAllStories();
    console.log(getAllStories);
    console.log("getAllStoriesの実行完了!")

    const burnNft = await RecoveryStoryContract.burnNft(1, 0);
    console.log(burnNft);
    console.log("burnNftの実行完了!")



    // await txn.wait();
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
