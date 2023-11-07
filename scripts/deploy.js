const hre=require("hardhat")

const main=async()=>{

  const options = {
    gasLimit: 2100000, // Specify your desired gas limit
    gasPrice:8000000000
  };

  const MarketPlace=await hre.ethers.deployContract("Marketplace",[],options)
  
  await MarketPlace.waitForDeployment()
  console.log("Contract Deployed TO->",MarketPlace.target)

}


const runMain=async()=>{
  try{
    await main()
    process.exit(0)
  }
  catch(err){
    console.log(err)
    process.exit(1)
  }
}



runMain()