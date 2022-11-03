const BankApp = artifacts.require("BankApp.sol")

contract("BankApp", async (accounts) => {

    // test case to see if a user can withdraw ether
    it("allows a singular user to withdraw an amount of ether", async() => {
        
        console.log("OUTPUT FROM WITHDRAW TEST:")
        // create the contract
        const bank = await BankApp.new()
        // the truffle test suite creates 10 accounts for testing purposes, use no. 1 as example
        const user = accounts[1]

        // web3.eth allows you to interact with the blockchain and smart contracts. get the balance for the address
        let bankBalance = await web3.eth.getBalance(bank.address)

        // web3.utils provides utility functions for dApps. fromWei is used to convert a wei value into an ether value
        console.log("Bank Balance: " + web3.utils.fromWei(bankBalance));

        // toWei is used to convert ether values into wei. Used to avoid having a large number of 0's. 
        const amount = web3.utils.toWei('15', 'ether')

        // first, deposit ether into the bank from the user
        await bank.deposit({from: user, value: amount})

        // get the balance, print it
        bankBalance = await web3.eth.getBalance(bank.address)
        console.log("Bank Balance: " + web3.utils.fromWei(bankBalance));

        // check that the amount of ether in the balance equals to 15
        let balance = await bank.balanceOfAccount(user)
        balance = parseInt(web3.utils.fromWei(balance, 'ether'))
        assert.equal(balance, 15)

        // withdraw 10 ether from the balance of the user
        const withdraw_amount = web3.utils.toWei('10', 'ether')
        await bank.withdraw(withdraw_amount, {from: user})

        // get the balance, print it
        bankBalance = await web3.eth.getBalance(bank.address)
        console.log("Bank Balance: " + web3.utils.fromWei(bankBalance));
        
        // parse the balance, check that it is now 5 because 15-10 = 5
        balance = await bank.balanceOfAccount(user)
        balance = parseInt(web3.utils.fromWei(balance, 'ether'))
        assert.equal(balance, 5)
    })

    // test case to check that the user can deposit ether
    it("allows a singular user to deposit an amount of ether", async() => {
        
        console.log("\nOUTPUT FROM DEPOSIT TEST: ")
        // create the contract
        const bank = await BankApp.new()
        // using account nr. 2
        const user = accounts[2]

        // get the balance of the user
        bankBalance = await web3.eth.getBalance(bank.address)
        console.log("Bank Balance: " + web3.utils.fromWei(bankBalance));

        // create an amount that equals to 10 ether through web3.utils
        const amount = web3.utils.toWei('10', 'ether')

        // deposit the 10 ether to the balance from the user
        await bank.deposit({from: user, value: amount})
        let balance = await bank.balanceOfAccount(user)

        // convert the wei value into an ether value, print the result. Should be 0 + 10 = 10
        balance = parseInt(web3.utils.fromWei(balance, 'ether'))
        console.log("Bank Balance: " + balance)
        
        // check that the balance is now 10
        assert.equal(balance, 10)
    })
})