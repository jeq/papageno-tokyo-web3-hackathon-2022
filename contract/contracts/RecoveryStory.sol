// RecoveryStory.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;


contract RecoveryStory {
    constructor() {
        uint basePrice = 0.001 ether;
    }
    struct Story {
        string storyTitle; //タイトル
        string[] tags; //タグ
        string storyBody; //本文
        string icatchSvg; //icatchのSVGデータ?
        uint createDate; //作成日時
        uint updateDate; //更新日時
        uint numLike; //likeの数
        uint itemId;  //storyのID
        address authorAddress;  //著者のアドレス
        address[] likeUserAdress; // いいねしたアドレスの配列
    }

    struct UserProfile {
        string name; // username
        string avatar; // user avator -> あらかじめ数枚Contract側で用意する？
        string biography; // profile
        address walletAddress;
    }

    UserProfile[] public userProfile;

    uint256 userId = 1;

    mapping(address=>uint256) addressTouserId; // アドレスとユーザーIDの紐付け

    Story[] public story;

    uint public storyIdCounter = 1;

    mapping(string=>address) titleToAddress; // 作品タイトルと所有者アドレスの紐づけ
    mapping(string=>uint) titleToStoryId; // 作品タイトルと作品IDの紐づけ

    function createUserProfile(
        string memory _name,
        string memory _avatar,
        string memory _biography
    ) external {
        require(addressTouserId[msg.sender] == 0, "An account already exists.");
        UserProfile memory _newUserProfile = UserProfile(_name, _avatar, _biography, msg.sender);
        userProfile.push(_newUserProfile);
        addressTouserId[msg.sender] = userId;
        userId ++;
    }

    function editUserProfile(string memory _name, string memory _avatar, string memory _biography) external {
        require(addressTouserId[msg.sender] > 0, "You have not yet registered a profile.");
        uint256 _userId = addressTouserId[msg.sender] - 1;
        userProfile[_userId].name = _name;
        userProfile[_userId].avatar = _avatar;
        userProfile[_userId].biography = _biography;
    }

    function getUserProfile() external view returns(
        string memory,
        string memory,
        string memory,
        address
    ){
        require(addressTouserId[msg.sender] > 0, "You have not yet registered a profile.");
        uint256 _userId = addressTouserId[msg.sender] - 1;
        return (userProfile[_userId].name,
                userProfile[_userId].avatar,
                userProfile[_userId].biography,
                userProfile[_userId].walletAddress);
    }

    function getAuthor(address _authorAddress) public view returns(string memory) {
        require(addressTouserId[_authorAddress] > 0, "You have not yet registered a profile.");
        uint256 _userId = addressTouserId[_authorAddress] - 1;
        return (userProfile[_userId].name);
    }

    function createStory(
        string memory _storyTitle,
        string[] memory tags,
        string memory _storyBody,
        string memory _icatchSvg
    ) public {
        require(titleToStoryId[_storyTitle] == 0, "An Story Data already exists.");
        address[] memory _emptyLikeUserAdress;
        Story memory _newStory = Story(
            _storyTitle,
            tags,
            _storyBody,
            _icatchSvg,
            block.timestamp,
            block.timestamp,
            0,
            storyIdCounter,
            msg.sender,
            _emptyLikeUserAdress
            );
        story.push(_newStory);
        titleToAddress[_storyTitle] = msg.sender;
        titleToStoryId[_storyTitle] = storyIdCounter;
        storyIdCounter++;
    }

    function editStory(
        string memory _storyTitle,
        string[] memory tags,
        string memory _storyBody,
        string memory _icatchSvg
    ) external {
        require(titleToStoryId[_storyTitle] > 0, "You have not yet registered a sotry data.");
        uint256 _storyId = titleToStoryId[_storyTitle] - 1;
        story[_storyId].storyTitle = _storyTitle;
        story[_storyId].tags = tags;
        story[_storyId].storyBody = _storyBody;
        story[_storyId].icatchSvg = _icatchSvg;
        story[_storyId].updateDate = block.timestamp;
    }

    function getStory(string memory _storyTitle) external view returns (
        string memory,
        string[] memory,
        string memory,
        string memory,
        string memory,
        uint,
        uint,
        uint,
        uint,
        address,
        address[] memory
      ) {
        require(titleToStoryId[_storyTitle] > 0, "No stories with the specified title are registered.");
        uint256 _storyId = titleToStoryId[_storyTitle] - 1;
        string memory storyAuthor = getAuthor(story[_storyId].authorAddress);
        return (
            story[_storyId].storyTitle,
            story[_storyId].tags,
            story[_storyId].storyBody,
            story[_storyId].icatchSvg,
            storyAuthor,
            story[_storyId].createDate,
            story[_storyId].updateDate,
            story[_storyId].numLike,
            story[_storyId].itemId,
            story[_storyId].authorAddress,
            story[_storyId].likeUserAdress
        );
    }

    function addLike(string memory _storyTitle) external {
        require(titleToStoryId[_storyTitle] > 0, "No stories with the specified title are registered.");
        uint256 _storyId = titleToStoryId[_storyTitle] - 1;
        require(story[_storyId].authorAddress != msg.sender, "Story authors cannot be liked.");
        bool checkDoubleLike = false;
        for (uint index=0; index < story[_storyId].likeUserAdress.length; index++) {
            if (story[_storyId].likeUserAdress[index] == msg.sender) {
                checkDoubleLike = true;
            }
        }
        require(checkDoubleLike == false, "You are liking this story on the nest.");
        story[_storyId].numLike ++;
        story[_storyId].likeUserAdress.push(msg.sender);

    function getAllStories() external view returns (Story[] memory) {
        return story;
    }
}

// "cardene", "cardene avatar", "cardene profile"
// "cardene",["A","B"],"cardene story","cardene svg"
