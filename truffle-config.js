require("babel-register");
require("babel-polyfill");
const HDWalletProvider = require("truffle-hdwallet-provider");

const MNEMONIC =
  "moral pill job prefer unusual keen loop devote dinosaur young pave injury";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // eslint-disable-line camelcase
    },
    ropsten: {
      provider: function() {
        const test = new HDWalletProvider(
          MNEMONIC,
          // Insert correct api key
          "https://ropsten.infura.io/v3/05757e5be84242a480a2401074e5d429"
        );
        return test;
      },
      network_id: 3,
      gas: 4000000 //make sure this gas allocation isn't over 4M, which is the max
    }
  }
};
