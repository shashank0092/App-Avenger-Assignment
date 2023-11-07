import { useState } from "react";
import Navbar from "../Componets/Navbar";
import { useGlobalContext } from "../context/Global";


const Sell=()=>{

    const {contract}=useGlobalContext()

    const[tokenId,setTokenId]=useState(null)
    console.log(contract)

    const Buy=async()=>{
        const res=await contract.buyNFT(tokenId);
        console.log(res);
        alert(res)
    }   
    return(
        <>

            <div  >
                <div>
                    <Navbar/>
                </div>


                <div className="flex flex-col justify-center items-center gap-5"  >
                <div>
                    <p>Buy NFT</p>
                </div>

                <div className="flex " >
                    <p>Enter Token ID:</p>
                    <input type="text" name="tokenId" className="border border-black rounded  " onChange={(e)=>setTokenId(e.target.value)} />
                </div>

                <div className="w-1/12" >
                <button onClick={()=>Buy()}  className="bg-green-500 w-full p-3 rounded " >
                    <p className="text-white font-bold" >Buy</p>
                </button>
                </div>

                </div>
            </div>
        
        </>
    )
}

export default Sell;