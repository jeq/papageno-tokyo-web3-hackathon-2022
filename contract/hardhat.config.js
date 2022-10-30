// hardhat.config.js
require("@nomicfoundation/hardhat-toolbox");
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/Zq-x0Ek-NkSLCQPQlLpyGQTcMZu9BOYq",
      accounts: ["a0cc977ec570987be05f2f378797a43ff0c5e8351b28373bada608d5ff102105"],
    },
  },
};
