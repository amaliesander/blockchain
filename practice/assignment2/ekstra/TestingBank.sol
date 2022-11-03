// pragma solidity >=0.5.0;

// contract TestingBank {
//     address owner;
//     uint userId;

//     struct customer {
//         address payable userAddress;
//         string name;
//         uint usersId;
//         uint total;
//     }

//     constructor() public {
//         owner = msg.sender;
//     }

//     mapping (address => customer) private accounts;
//     event Deposits (address user, uint amount);
//     event Withdrawal (address user, uint amount);


//     function deposit(uint amount) public payable{
//         require(msg.value==amount);
//         accounts[msg.sender].totalAmount+= amount;
//         emit Deposits(msg.sender, msg.value);
//     }

//     function getAccountBalance() public view returns(uint) {
//         return (accounts[msg.sender].totalAmount);
//     }
// }