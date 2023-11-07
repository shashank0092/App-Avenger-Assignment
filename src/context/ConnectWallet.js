import {ethers} from "ethers"
const ConnectWallet=()=>{

    const connect=async()=>{
        const Address=await window.ethereum.request({
            method:'eth_requestAccounts'
        })

        const Amount = await window.ethereum.request({
            method: 'eth_getBalance',
            params: [Address[0], 'latest']
        })

        const amountInEther = await ethers.utils.formatEther(Amount);
        const userAddress=Address[0];
        return{
            userAddress,amountInEther
        }

    } 
   
    return connect()
}
export default ConnectWallet;