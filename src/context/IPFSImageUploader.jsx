import { create } from "ipfs-http-client"
import { useState } from "react";



const IPFSImageUploader = ({metadata,setMetaData}) => {

  // console.log(metadata,"this is  value of ipfs")
  // console.log(setMetaData,"this is  value of ipfs")
  

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
    const files = e.target[0].files;

    if (!files || files.length === 0) {
      return alert("NO FILES SELECTED")
    }

    const file = files[0];
    const result = await ipfs.add(file);
    
    setUploadImages([
      ...uploadImages, {
        cid: result.cid,
        path: result.path
      }
    ])

    
    await setMetaData({...metadata,image:`https://infura-ipfs.io/ipfs/${result.path}`})
    // console.log(metadata,"this is uploadimage");
  }

  return (
    <>
      <div>

        <form onSubmit={onSubmitHandler} className="flex flex-col gap-5" >

          <div  >
            <input type="file" id="file-upload" name="file" />
          </div>
          <div>
            {
              metadata?.image==""?(
                <>
                  <button type="submit" className="bg-green-500 w-full p-3 rounded "  >
              <p className="text-white font-bold" >Upload Image</p>
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

export default IPFSImageUploader;