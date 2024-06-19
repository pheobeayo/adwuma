// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract SkillSwap {
    
    struct User {
        address userAddress;
        string userName;
        uint256 reputation;
        uint256 ratingCount;
    }

    struct SkillExchange {
        uint256 id;
        address requester;
        string skillOffered;
        string skillRequested;
        uint256 offererReputation;
        address offerer;
        bool isCompleted;
        uint256 ratingFromRequester;
        uint256 ratingFromOfferer;
    }

    uint256 public exchangeCounter = 0;
    mapping(address => User) public users;
    mapping(uint256 => SkillExchange) public skillExchanges;
    mapping(address => uint256[]) public userExchanges;

    event UserRegistered(address userAddress, string userName);
    event SkillExchangePosted(uint256 id, address requester, string skillOffered, string skillRequested);
    event SkillExchangeAccepted(uint256 id, address offerer);
    event SkillExchangeCompleted(uint256 id);
    event UserRated(address user, uint256 reputation);

    function registerUser(string memory _userName) public {
        require(bytes(users[msg.sender].userName).length == 0, "User already registered");
        
        users[msg.sender] = User({
            userAddress: msg.sender,
            userName: _userName,
            reputation: 0,
            ratingCount: 0
        });

        emit UserRegistered(msg.sender, _userName);
    }

    function postSkillExchange(string memory _skillOffered, string memory _skillRequested) public {
        require(bytes(users[msg.sender].userName).length != 0, "User not registered");
        
        exchangeCounter++;
        skillExchanges[exchangeCounter] = SkillExchange({
            id: exchangeCounter,
            requester: msg.sender,
            skillOffered: _skillOffered,
            skillRequested: _skillRequested,
            offererReputation: 0,
            offerer: address(0),
            isCompleted: false,
            ratingFromRequester: 0,
            ratingFromOfferer: 0
        });

        userExchanges[msg.sender].push(exchangeCounter);

        emit SkillExchangePosted(exchangeCounter, msg.sender, _skillOffered, _skillRequested);
    }

    function acceptSkillExchange(uint256 _id) public {
        SkillExchange storage exchange = skillExchanges[_id];
        require(exchange.id == _id, "Skill exchange not found");
        require(exchange.offerer == address(0), "Skill exchange already accepted");
        require(exchange.requester != msg.sender, "Requester cannot accept own request");
        require(bytes(users[msg.sender].userName).length != 0, "User not registered");

        exchange.offerer = msg.sender;
        exchange.offererReputation = users[msg.sender].reputation;

        userExchanges[msg.sender].push(_id);

        emit SkillExchangeAccepted(_id, msg.sender);
    }

    function completeSkillExchange(uint256 _id) public {
        SkillExchange storage exchange = skillExchanges[_id];
        require(exchange.id == _id, "Skill exchange not found");
        require(exchange.isCompleted == false, "Skill exchange already completed");
        require(exchange.requester == msg.sender || exchange.offerer == msg.sender, "Only participants can complete");

        exchange.isCompleted = true;

        emit SkillExchangeCompleted(_id);
    }

    function rateUser(uint256 _id, uint256 _rating) public {
        SkillExchange storage exchange = skillExchanges[_id];
        require(exchange.id == _id, "Skill exchange not found");
        require(exchange.isCompleted == true, "Skill exchange not completed");
        require(_rating >= 1 && _rating <= 5, "Rating must be between 1 and 5");
        
        if (msg.sender == exchange.requester) {
            require(exchange.ratingFromRequester == 0, "Requester already rated");
            exchange.ratingFromRequester = _rating;
            users[exchange.offerer].reputation = ((users[exchange.offerer].reputation * users[exchange.offerer].ratingCount) + _rating) / (users[exchange.offerer].ratingCount + 1);
            users[exchange.offerer].ratingCount++;
            emit UserRated(exchange.offerer, users[exchange.offerer].reputation);
        } else if (msg.sender == exchange.offerer) {
            require(exchange.ratingFromOfferer == 0, "Offerer already rated");
            exchange.ratingFromOfferer = _rating;
            users[exchange.requester].reputation = ((users[exchange.requester].reputation * users[exchange.requester].ratingCount) + _rating) / (users[exchange.requester].ratingCount + 1);
            users[exchange.requester].ratingCount++;
            emit UserRated(exchange.requester, users[exchange.requester].reputation);
        } else {
            revert("Only participants can rate");
        }
    }
}
