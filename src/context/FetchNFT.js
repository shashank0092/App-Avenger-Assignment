

// const FetchNFT = async (address) => {
//     try {
//         console.log(address, "this is the address");

//         const config = {
//             apiKey: "p455lghLZelJEBcu4BH44h9ZGjFUH5go",
//             network: Network.ETH_SEPOLIA
//         }

//         const alchemy = new Alchemy(config);
        

//         const res=await alchemy.nft.getNftsForOwner("0xa70341495c61f2e739c8fa5cad76e2a02964667f")
            

//         console.log(res);
//         return res;
//     } catch (error) {
//         console.log("Error fetching NFTs:", error);
//         throw error;
//     }
// }

// export default FetchNFT;