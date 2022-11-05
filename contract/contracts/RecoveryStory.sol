// RecoveryStory.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "./StoryNFT.sol";

contract RecoveryStory is StoryNFT {

    string[] public avatars;

    constructor () {
        avatars = [
            "QmPF8Tgt9Ro1QkAmm5oeT4ysjceHfLPTAjxKgSoNY2Q8Xx",
            "QmajCEJgDtGqPAgSALbN74zqJcCN7TrpAxgutBs4FwZnoZ",
            "QmX5dTmMNYSJ37ZjmgTL2wycnuqPeH1CWSbr3vFL87M47C",
            "QmbFHVPH1VcUjiju9KAf8cknkAyXXDEehe23hdaHc8i54A",
            "QmZ1p634cxLqBtU98EYYNisVBVyYFshvkCQcPSStjYbbBS"
        ];
    }

    struct Story {
        string storyTitle; //タイトル
        string[] tags; //タグ
        string storyBody; //本文
        string dataURI; // NFTのdataURI
        uint createDate; //作成日時
        uint updateDate; //更新日時
        uint numLike; //likeの数
        uint storyId;  //storyのID
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

    Story[] public story;

    uint public storyIdCounter = 1;
    uint public userIdCounter = 1;

    mapping(address=>uint256) addressTouserId; // アドレスとユーザーIDの紐付け

    mapping(uint=>address) storyIdToAddress; // 作品IDと所有者アドレスの紐づけ

    function createUserProfile(
        string memory _name,
        string memory _avatar,
        string memory _biography
    ) external {
        require(addressTouserId[msg.sender] == 0, "An account already exists.");
        UserProfile memory _newUserProfile = UserProfile(_name, _avatar, _biography, msg.sender);
        userProfile.push(_newUserProfile);
        addressTouserId[msg.sender] = userIdCounter;
    }

    function getAllAvatar() external view returns(string[] memory) {
        return avatars;
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
        string[] memory _tags,
        string memory _storyBody
    ) public {
        // require(story[storyIdCounter].storyId == 0, "An Story Data already exists.");
        address[] memory _emptyLikeUserAdress;
        // string memory _dataURI;
        // uint _tokenIds;
        // (_dataURI, _tokenIds) = mintNFT(_storyTitle);
        Story memory _newStory = Story(
            _storyTitle,
            _tags,
            _storyBody,
            "img",
            block.timestamp,
            block.timestamp,
            0,
            storyIdCounter,
            msg.sender,
            _emptyLikeUserAdress
            );
        story.push(_newStory);
        storyIdToAddress[storyIdCounter] = msg.sender;
        storyIdCounter++;
    }

    function editStory(
        string memory _storyTitle,
        string[] memory tags,
        string memory _storyBody,
        uint _storyId
    ) external {
        require(story[_storyId].storyId > 0, "You have not yet registered a sotry data.");
        story[_storyId].storyTitle = _storyTitle;
        story[_storyId].tags = tags;
        story[_storyId].storyBody = _storyBody;
        story[_storyId].updateDate = block.timestamp;
    }

    // function getStory(uint  _storyId) external view returns (
    //     string memory,
    //     string[] memory,
    //     string memory,
    //     string memory,
    //     string memory,
    //     uint,
    //     uint,
    //     uint,
    //     uint,
    //     address,
    //     address[] memory
    //   ) {
    //     require(story[_storyId].storyId > 0, "No stories with the specified title are registered.");
    //     string memory storyAuthor = getAuthor(story[_storyId].authorAddress);
    //     return (
    //         story[_storyId].storyTitle,
    //         story[_storyId].tags,
    //         story[_storyId].storyBody,
    //         story[_storyId].dataURI,
    //         storyAuthor,
    //         story[_storyId].createDate,
    //         story[_storyId].updateDate,
    //         story[_storyId].numLike,
    //         story[_storyId].storyId,
    //         story[_storyId].authorAddress,
    //         story[_storyId].likeUserAdress
    //     );
    // }

    function deleteStory(uint _tokenId) external {
        require(ownerOf(_tokenId) == msg.sender, "Only NFT owners can burn.");
        _burn(_tokenId);
    }

    function addLike(uint  _storyId) external {
        require(story[_storyId-1].storyId > 0, "No stories with the specified title are registered.");
        require(story[_storyId]-1.authorAddress != msg.sender, "Story authors cannot be liked.");
        bool checkDoubleLike = false;
        for (uint index=0; index < story[_storyId-1].likeUserAdress.length; index++) {
            if (story[_storyId-1].likeUserAdress[index] == msg.sender) {
                checkDoubleLike = true;
            }
        }
        require(checkDoubleLike == false, "You are liking this story on the nest.");
        story[_storyId-1].numLike ++;
        story[_storyId-1].likeUserAdress.push(msg.sender);
    }
    function getAllStories() external view returns (Story[] memory) {
        return story;
    }

    // function buyNft(uint _tokenId) {};
}

// "cardene", "cardene avatar", "cardene profile"
// "cardene",["A","B"],"cardene story"
