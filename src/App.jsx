import { ethers } from "ethers"
import { useEffect, useState } from 'react';
import { useGlobalContext } from "./context/Global";
import Home from "./Pages/Home";
import Mint from "./Pages/Mint";
import Sell from "./Pages/Sell";
import {BrowserRouter,Routes,Route} from "react-router-dom"
// import 'dotenv/config'

const App = () => {

    const {ConnectWallet,FetchContract,setWalletDetails,setContract,FetchNFT,setOwnNFTs,ownNFTs,walletDetails}=useGlobalContext()

    const shukla=process.env.REACT_APP_ProjectID
    console.log(shukla,"this is boi")
    
    const connect=async()=>{
        const data=await ConnectWallet();
        await setWalletDetails(data)

        const fetch=await FetchContract();
        await setContract(fetch)


        
    }

    
    
    useEffect(()=>{
        connect()
    },[])
   
   
    
    

    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/Mint" element={<Mint/>} />
                    <Route path="/Sell" element={<Sell/>} />
                </Routes>
            
            </BrowserRouter>
        </>
    )
}

export default App;