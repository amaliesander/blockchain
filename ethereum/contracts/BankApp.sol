//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract BankApp {
    //  mapping between addresses and balances
    mapping (address => uint256) private balances;


    // withdraw money
    function withdraw(uint amount) public {
        // listening to the message sender, require that the balance of the sender is bigger than the amound wanted to be withdrawn
        require(balanceOfAccount(msg.sender) >= amount);

        // remove the amount withdrawn from the owners balance of ether
        balances[msg.sender] -= amount;

        // payable necessary, otherwise ether cannot be sent. transfers the amount of ether.
        payable(msg.sender).transfer(amount);


    }

    // deposit money - payable because otherwise it would not be able to receive either in the contract
    function deposit() payable public {
        // take the balance of the owner and increase it by the ether sent
        balances[msg.sender] += msg.value;

    }

    // get the balance of the account, simple because you pass the account as an argument
    // view because it is read only 
    function balanceOfAccount(address account) public view returns (uint256) {
        return balances[account];
    }

}