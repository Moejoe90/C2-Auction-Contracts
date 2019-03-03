var Migrations = artifacts.require("DoggoToken");

module.exports = function(deployer) {
  // Deploy the Migrations contract as our only task
  deployer.deploy(Migrations,"Piece3","Piece3","1");
};