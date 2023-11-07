import { createContext, useContext, useState } from "react";
import ConnectWallet from "./ConnectWallet";
import FetchContract from "./FatchContract";
import FetchNFT from "./FetchNFT";




const GlobalContext=createContext(null);

export const GlobalProvider=(props)=>{

    const[walletDetails,setWalletDetails]=useState(null)
    const[contract,setContract]=useState(null);
    const[ownNFTs,setOwnNFTs]=useState(null)
 
    // FetchNFT()

    
    return(
        <GlobalContext.Provider value={{ConnectWallet,FetchContract,walletDetails,setWalletDetails,contract,setContract,FetchNFT,ownNFTs,setOwnNFTs}} >
            {props.children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext=()=>useContext(GlobalContext)