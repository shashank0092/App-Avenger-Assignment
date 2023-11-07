import { create } from "ipfs-http-client"
import { useState } from "react";



const IPFSFileUploader = ({metadata,setMetaData}) => {


  

  const projectID = process.env.REACT_APP_ProjectID
  const projectSecretKey = process.env.Project_SecretKey

  const authorization = "Basic " + btoa(projectID + ":" + projectSecretKey);

  const [uploadImages, setUploadImages] = useState([]);
  const ipfs = create({
    url: "https://ipfs.infura.io:5001/api/v0",
    headers: {
      authorization
    }
  })
  async function onSubmitHandler(e) {
    e.preventDefault();
    
    const uploadfile={
        name:metadata.name,
        image:metadata.image,
        description:metadata.description,
        price:metadata.price,
        royalty:metadata.royalty

    }
    const result = await ipfs.add(JSON.stringify(uploadfile));
    console.log(result,"this is result")
    setUploadImages([
      ...uploadImages, {
        cid: result.cid,
        path: result.path
      }
    ])

    
    await setMetaData({...metadata,file:result?.path})
    console.log(metadata,"this is file");
  }

  return (
    <>
      <div>

        <form onSubmit={onSubmitHandler} className="flex flex-col gap-5" >

          
          <div>
            {
              metadata?.file==""?(
                <>
                  <button type="submit" className="bg-green-500 w-full p-3 rounded "  >
              <p className="text-white font-bold" >Upload File</p>
            </button>
                </>
              ):(
                <></>
              )
            }
          </div>
        </form>
      </div>

    
    </>
  )
}

export default IPFSFileUploader;