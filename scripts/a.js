/**
 async function main() {
    const [deployer, addr1, addr2, _] = await ethers.getSigners();
    console.log(deployer)
    const Token = await ethers.getContractFactory('Token');
    const token = await Token.deploy();
    console.log(token.address)
    await token.connect(addr1).transfer(addr2.address, 1000);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });


 */

    const fs = require('fs');

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with the account: ${deployer.address}`);
  
  const balance = await deployer.getBalance();

  console.log(JSON.stringify(balance))
  console.log(`Account balance: ${balance.toString()}`);

  const Token = await ethers.getContractFactory('Token');
  const token = await Token.deploy();
  console.log(`Token address: ${token.address}`);

  const data = {
    address: token.address,
    abi: JSON.parse(token.interface.format('json'))
  };
  fs.writeFileSync('frontend/src/Token.json', JSON.stringify(data)); 
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });