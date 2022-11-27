require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-ethers")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("dotenv").config()
require("hardhat-contract-sizer")


const GOR_KEY = process.env.GOR_KEY; 
const PRIVATE_KEY = process.env.PRIVATE_KEY; 

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",

  networks: { 
    mumbai: { 
      chainId: 4,
      blockConfirmations: 6,
      url: GOR_KEY,
      accounts: [PRIVATE_KEY],
      saveDeployments: true,
    }
  },
  namedAccounts: { 
    deployer: { 
      default: 0,
    }
  }




};
