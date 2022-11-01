// RecoveryStory.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Profile {
    struct UserProfile {
        string name; // username
        string avatar; // user avator -> あらかじめ数枚Contract側で用意する？
        address walletAddress;
    }

    UserProfile[] public userProfile;

    uint256 userId = 1;

    mapping(address=>uint256) addressTouserId; // アドレスとユーザーIDの紐付け

    function createUserProfile(string memory _name, string memory _avatar) external {
        require(addressTouserId[msg.sender] == 0, "An account already exists.");
        UserProfile memory _newUserProfile = UserProfile(_name, _avatar, msg.sender);
        userProfile.push(_newUserProfile);
        addressTouserId[msg.sender] = userId;
        userId ++;
    }

    function editUserProfile(string memory _name, string memory _avatar) external {
        require(addressTouserId[msg.sender] > 0, "You have not yet registered a profile.");
        uint256 _userId = addressTouserId[msg.sender] - 1;
        userProfile[_userId].name = _name;
        userProfile[_userId].avatar = _avatar;
    }

    function getUserProfile() external view returns(string memory, string memory, address){
        require(addressTouserId[msg.sender] > 0, "You have not yet registered a profile.");
        uint256 _userId = addressTouserId[msg.sender] - 1;
        return (userProfile[_userId].name, userProfile[_userId].avatar, userProfile[_userId].walletAddress);
    }
}
