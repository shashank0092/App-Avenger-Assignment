import IPFSUploader from "../context/IPFSImageUploader";
import Navbar from "../Componets/Navbar"
import { useEffect, useState } from "react";
import IPFSFileUploader from "../context/IPFSFileuploader";
import { useGlobalContext } from "../context/Global";





const Mint=()=>{

    const[meatadata,setMetaData]=useState({
        name:"",description:"",image:"",file:"",price:"",royalty:""
    })  

    const {contract,walletDetails}=useGlobalContext()
    console.log(contract,"this is contract")
    console.log(walletDetails,"this is wallet details")
    console.log(meatadata,"the final metadata")


    const Mint=async()=>{
        const res=await contract?.mint(walletDetails?.userAddress,meatadata?.price,meatadata?.royalty,meatadata?.file)
        console.log(res)
        alert(res)

    }
   

 
    return(
        <>

                <div>

                    <div>
                        <Navbar/>      
                    </div>
                    <div className="flex h-full justify-center items-center  "  >
                        <div className="flex flex-col gap-5" >

                                <div>
                                    <p>Upload Image For Mint Your NFT</p>       
                                </div>


                                <div className="flex flex-col gap-5 " >
                                        <div className=" flex gap-4 " >
                                            <p>Name:</p>
                                            <input type="text" name="name" onChange={(e)=>setMetaData({...meatadata,name:e.target.value})}  className="border border-black rounded  "  />
                                        </div>
                                        
                                        <div className=" flex gap-4 " >
                                            <p>Description:</p>
                                            <input type="text" name="description" onChange={(e)=>setMetaData({...meatadata,description:e.target.value})}  className="border border-black rounded  "  />
                                        </div>

                                        <div className=" flex gap-4 " >
                                            <p>Price:</p>
                                            <input type="text" name="description" onChange={(e)=>setMetaData({...meatadata,price:e.target.value})}  className="border border-black rounded  "  />
                                        </div>

                                        <div className=" flex gap-4 " >
                                            <p>Royalty:</p>
                                            <input type="text" name="description" onChange={(e)=>setMetaData({...meatadata,royalty:e.target.value})}  className="border border-black rounded  "  />
                                        </div>
                                       
                                       <div>
                                            <IPFSUploader metadata={meatadata} setMetaData={setMetaData} />
                                       </div>

                                        <div>
                                            {
                                                meatadata.image!=""?(<IPFSFileUploader metadata={meatadata} setMetaData={setMetaData}  />):(<></>)
                                            }
                                        </div>

                                        <div>
                                            {
                                                meatadata.file!=""?(<>

                                                    <button onClick={()=>Mint()}  className="bg-green-500 w-full p-3 rounded " >
                                                        MINT
                                                    </button>
                                                    
                                                </>):(
                                                <>
                                                
                                                </>)
                                            }
                                        </div>
                                </div>
                        </div>    
                    </div>
                </div>

        </>
    )
}

export default Mint;