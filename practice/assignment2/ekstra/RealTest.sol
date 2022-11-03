// pragma solidity >=0.5.0;

// contract Adoption {
//     address[] public accounts;

//     struct account {
//         address payable accountAddress;

//     }

//     function deposit() {
//         // TO DO
//     }

//     function withdraw() {
//         // TO DO
//     }

//     function getBalanceAccount() {
//         // TO DO
//     }



// // Adopting a pet
//     function adopt(uint petId) public returns (uint) {
//         require(petId >= 0 && petId <= 15);

//         adopters[petId] = msg.sender;

//         return petId;
//     }

// // Retrieving the adopters
//     function getAdopters() public view returns (address[16] memory) {
//         return adopters;
//     }

// }

// contract Adoption {
//     address[16] public adopters;

// // Adopting a pet
//     function adopt(uint petId) public returns (uint) {
//         require(petId >= 0 && petId <= 15);

//         adopters[petId] = msg.sender;

//         return petId;
//     }

// // Retrieving the adopters
//     function getAdopters() public view returns (address[16] memory) {
//         return adopters;
//     }

// }