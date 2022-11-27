
const {ethers} = require("hardhat")



async function main()  { 

  const nft_contract = await ethers.getContractFactory("NFT"); 

  const deploy_nft_contract = await nft_contract.deploy();


  console.log("Contract deployed to ", deploy_nft_contract.address)



}



main()
  .then(() => process.exit(0))
  .catch((error) => { 
    console.error(error);
    process.exit(1)
  })