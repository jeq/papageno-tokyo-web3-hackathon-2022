// RecoveryStory.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "./MintNft.sol";

contract RecoveryStory is MintNft {

    string[] public avatars;
    uint basePrice = 0.001 ether;

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
        uint tokenId; // NFTのtokenId
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
        string memory _biography,
        uint _avatar
    ) external {
        require(addressTouserId[msg.sender] == 0, "An account already exists.");

        UserProfile memory _newUserProfile = UserProfile(_name, _biography, avatars[_avatar-1], msg.sender);
        userProfile.push(_newUserProfile);
        addressTouserId[msg.sender] = userIdCounter;
    }

    function getAllAvatar() external view returns(string[] memory) {
        return avatars;
    }

    function editUserProfile(
        string memory _name,
        string memory _biography,
        uint _avatar
    ) external {
        require(addressTouserId[msg.sender] > 0, "You have not yet registered a profile.");
        uint256 _userId = addressTouserId[msg.sender] - 1;
        userProfile[_userId].name = _name;
        userProfile[_userId].avatar = avatars[_avatar-1];
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
        string memory _dataURI;
        uint _tokenIds;
        (_dataURI, _tokenIds) = mintNFT(_storyTitle);
        Story memory _newStory = Story(
            _storyTitle,
            _tags,
            _storyBody,
            _dataURI,
            block.timestamp,
            block.timestamp,
            0,
            storyIdCounter,
            _tokenIds,
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
        require(story[_storyId-1].authorAddress == msg.sender, "Only the author can edit the story.");
        story[_storyId-1].storyTitle = _storyTitle;
        story[_storyId-1].tags = tags;
        story[_storyId-1].storyBody = _storyBody;
        story[_storyId-1].updateDate = block.timestamp;
    }

    function addLike(uint  _storyId) external {
        require(story[_storyId-1].storyId > 0, "No stories with the specified title are registered.");
        require(story[_storyId-1].authorAddress == msg.sender, "Story authors cannot be liked.");
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

    function buyNft(uint _tokenId, uint _storyId) public payable {
        address ownerAddress = storyIdToAddress[_storyId-1];
        require(msg.sender != storyIdToAddress[_storyId-1], "Seller cannot be buyer");
        storyIdToAddress[_storyId-1] = msg.sender;
        uint price = story[_storyId-1].numLike * basePrice;
        require(msg.value >= price, "Insufficient payment");
        safeTransferFrom(ownerAddress, msg.sender, _tokenId);
        payable(ownerAddress).transfer(msg.value);
    }

    function burnNft(uint _storyId, uint _tokenId) public {
        require(story[_storyId-1].authorAddress == msg.sender, "Only the creator of the story can burn.");
        // _transfer(msg.sender, 0x000000000000000000000000000000000000dEaD, _tokenId);
        _burn(_tokenId);
    }
}

// "cardene", "cardene avatar", "cardene profile"
// "cardene",["A","B"],"cardene story"
