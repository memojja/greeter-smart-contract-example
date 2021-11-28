require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html


require('@nomiclabs/hardhat-waffle');

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */


//const INFRA_URL = "https://rinkeby.infura.io/v3/fa0e177dc2634ae0843d8e8fe6dbcdc9"
//const PRIVATE_KEY = "b1b0a0d6735c0cd2a0372cad8f856ae609bfa5c8cf469221903678812766e72e"


const INFRA_URL = "https://ropsten.infura.io/v3/fcce1f1434fe473ea079c9ba5cb62e1c"
const PRIVATE_KEY = "b1b0a0d6735c0cd2a0372cad8f856ae609bfa5c8cf469221903678812766e72e"

module.exports = {
  solidity: "0.8.0",
  networks: {
 

    ropsten: {
      url: INFRA_URL,
      account: [`0x${PRIVATE_KEY}`]
    },
/**
     rinkeby: {
      url: INFRA_URL,
      account: [PRIVATE_KEY]
    },

 */
    
   /**
    
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      chainId: 43113,
      accounts: [PRIVATE_KEY],
    },

    */
  }
};
