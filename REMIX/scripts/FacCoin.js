const EIP20 = artifacts.require('./FacCoin.sol');

module.exports = (deployer) => {
  deployer.deploy(EIP20, 10000, 'FacCoin', 1, 'FC');
};

