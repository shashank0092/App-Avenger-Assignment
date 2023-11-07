import {ethers} from "ethers"
import { address } from "../costants/adress"
import abi from "../costants/Marketplace.json"


const FetchContract=()=>{

    const fetch=async()=>{
       
        const provider=await new ethers.providers.Web3Provider(window.ethereum)
        const signer=await provider.getSigner()
        const contractFetched=await new ethers.Contract(address,abi.abi,signer);
        return contractFetched;
        
    }

    return fetch()
    
}

export default FetchContract;