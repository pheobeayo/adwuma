// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

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
        uint256 amountForSkill;
    }

    IERC20 public USDT;
    uint256 public exchangeCounter = 0;
    mapping(address => User) public users;
    mapping(uint256 => SkillExchange) public skillExchanges;
    mapping(address => uint256[]) public userExchanges;

    event UserRegistered(address userAddress, string userName);
    event SkillExchangePosted(
        uint256 id,
        address requester,
        string skillOffered,
        string skillRequested
    );
    event SkillExchangeAccepted(uint256 id, address offerer);
    event SkillExchangeCompleted(uint256 id);
    event UserRated(address user, uint256 reputation);

    constructor(address _USDT) {
        require(_USDT != address(0), "Dev inputed zero address");
        USDT = IERC20(_USDT);
    }

    function registerUser(string memory _userName) public {
        // Ensure the user name is not empty.
        require(bytes(_userName).length > 0, "Username cannot be empty");

        // Enforce length constraints for the user name (e.g., between 3 and 32 characters).
        require(bytes(_userName).length >= 3, "Username too short");
        require(bytes(_userName).length <= 32, "Username too long");

        // Check that the user has not already been registered.
        require(
            bytes(users[msg.sender].userName).length == 0,
            "User already registered"
        );

        // If there are additional character set or formatting validations, include them here.

        // Proceed to register the user.
        users[msg.sender] = User({
            userAddress: msg.sender,
            userName: _userName,
            reputation: 0,
            ratingCount: 0
        });

        emit UserRegistered(msg.sender, _userName);
    }

    function postSkillExchange(
        string memory _skillOffered,
        string memory _skillRequested,
        uint256 _amountForSkill
    ) public returns (uint256) {
        require(
            bytes(users[msg.sender].userName).length != 0,
            "User not registered"
        );
        exchangeCounter++;
        uint256 newId = exchangeCounter;
        skillExchanges[exchangeCounter] = SkillExchange({
            id: exchangeCounter,
            requester: msg.sender,
            skillOffered: _skillOffered,
            skillRequested: _skillRequested,
            offererReputation: 0,
            offerer: address(0),
            isCompleted: false,
            ratingFromRequester: 0,
            ratingFromOfferer: 0,
            amountForSkill: _amountForSkill
        });

        userExchanges[msg.sender].push(exchangeCounter);
        bool sent = USDT.transferFrom(
            msg.sender,
            address(this),
            _amountForSkill
        );
        require(sent, "failed to transfer USDT");
        emit SkillExchangePosted(
            exchangeCounter,
            msg.sender,
            _skillOffered,
            _skillRequested
        );
        return newId;
    }

    function acceptSkillExchange(uint256 _id) public {
        SkillExchange storage exchange = skillExchanges[_id];
        require(exchange.id == _id, "Skill exchange not found");
        require(
            exchange.offerer == address(0),
            "Skill exchange already accepted"
        );
        require(
            exchange.requester != msg.sender,
            "Requester cannot accept own request"
        );
        require(
            bytes(users[msg.sender].userName).length != 0,
            "User not registered"
        );

        exchange.offerer = msg.sender;
        exchange.offererReputation = users[msg.sender].reputation;

        userExchanges[msg.sender].push(_id);

        emit SkillExchangeAccepted(_id, msg.sender);
    }

    function completeSkillExchange(uint256 _id) public {
        SkillExchange storage exchange = skillExchanges[_id];
        require(exchange.id == _id, "Skill exchange not found");
        require(
            exchange.isCompleted == false,
            "Skill exchange already completed"
        );
        require(
            exchange.requester == msg.sender || exchange.offerer == msg.sender,
            "Only participants can complete"
        );
        uint256 _amountForSkill = exchange.amountForSkill;
        exchange.amountForSkill = 0;
        require(
            USDT.balanceOf(address(this)) >= _amountForSkill,
            "insufffiecient funds"
        );
        bool sent = USDT.transfer(exchange.offerer, _amountForSkill);
        require(sent, "failed to transfer USDT");
        exchange.isCompleted = true;

        emit SkillExchangeCompleted(_id);
    }

    function rateUser(uint256 _id, uint256 _rating) public {
        SkillExchange storage exchange = skillExchanges[_id];
        require(exchange.id == _id, "Skill exchange not found");
        require(exchange.isCompleted == true, "Skill exchange not completed");
        require(_rating >= 1 && _rating <= 5, "Rating must be between 1 and 5");

        if (msg.sender == exchange.requester) {
            require(
                exchange.ratingFromRequester == 0,
                "Requester already rated"
            );
            exchange.ratingFromRequester = _rating;
            users[exchange.offerer].reputation =
                ((users[exchange.offerer].reputation *
                    users[exchange.offerer].ratingCount) + _rating) /
                (users[exchange.offerer].ratingCount + 1);
            users[exchange.offerer].ratingCount++;
            emit UserRated(
                exchange.offerer,
                users[exchange.offerer].reputation
            );
        } else if (msg.sender == exchange.offerer) {
            require(exchange.ratingFromOfferer == 0, "Offerer already rated");
            exchange.ratingFromOfferer = _rating;
            users[exchange.requester].reputation =
                ((users[exchange.requester].reputation *
                    users[exchange.requester].ratingCount) + _rating) /
                (users[exchange.requester].ratingCount + 1);
            users[exchange.requester].ratingCount++;
            emit UserRated(
                exchange.requester,
                users[exchange.requester].reputation
            );
        } else {
            revert("Only participants can rate");
        }
    }
}

interface IERC20 {
    function balanceOf(address account) external view returns (uint256);

    function transfer(address to, uint256 value) external returns (bool);

    function transferFrom(
        address from,
        address to,
        uint256 value
    ) external returns (bool);
}
