import { Link } from "react-router-dom"
import LOGO from "../assets/Logo.png"
import Avatar from '@mui/material/Avatar';
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between p-5 " >
        <div className="flex justify-center items-center"  >
          <div>
            <img src={LOGO} alt="" />
          </div>

          <div>
            <p className="text-black font-extrabold text-3xl "  >CloseSea</p>
            <p className="text-black font-semibold " >Testnet</p>
          </div>
        </div>

        <div className="flex gap-24 " >
          <div>
            <Link to="/" >
              <p className="font-semibold text-xl hover:underline " >Home</p>
            </Link>
          </div>
          <div>
            <Link to="/Mint" >
              <p className="font-semibold text-xl hover:underline">Mint</p>
            </Link>
          </div>
          <div>
            <Link to="/Sell" >
             <p className="font-semibold text-xl hover:underline" >Buy</p>
            </Link>
          </div>
        </div>
        <div>
          <Avatar>H</Avatar>

        </div>

      </div>
    </>
  )
}

export default Navbar