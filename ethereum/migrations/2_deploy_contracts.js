var BankApp = artifacts.require("./BankApp.sol");

module.exports = function(deployer) {
    deployer.deploy(BankApp);
};