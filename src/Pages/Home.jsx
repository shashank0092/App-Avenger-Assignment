import Navbar from "../Componets/Navbar";


import Typography from '@mui/material/Typography';
import { useGlobalContext } from "../context/Global";
import { useEffect } from "react";


const Home=()=>{

    const {walletDetails,FetchNFT,setOwnNFTs,ownNFTs}=useGlobalContext()
    
    
    
    return(
        <>
            <div> 
                <div>
                    <Navbar/>
                </div>

                <div>
                    <div>
                        <Typography variant="h5" >NFTS OWND BY YOU</Typography>
                    </div>

                    <div>
                        <Typography> There we will show all nfts </Typography>
                    </div>


                </div>
            </div>        
        
        </>
    )
}

export default Home;