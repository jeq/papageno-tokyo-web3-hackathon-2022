// RecoveryStory.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Profile {
    struct UserProfile {
        string name; // username
        string avatar; // user avator -> あらかじめ数枚Contract側で用意する？
        string biography; // profile
        address walletAddress;
    }

    UserProfile[] public userProfile;

    uint256 userId = 1;

    mapping(address=>uint256) public addressTouserId; // アドレスとユーザーIDの紐付け

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
        return (
            userProfile[_userId].name,
            userProfile[_userId].avatar,
            userProfile[_userId].biography,
            userProfile[_userId].walletAddress);
    }

    function getAuthor(address _authorAddress) public view returns(string memory) {
        require(addressTouserId[_authorAddress] > 0, "You have not yet registered a profile.");
        uint256 _userId = addressTouserId[_authorAddress] - 1;
        return (userProfile[_userId].name);
    }

}
