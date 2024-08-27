import { APP_LOGO } from "./constant";
import AppText from "./utils/app-text";

const Header =()=>{
    return(
        <div className=' h-25 bg-cyan-300 p-2 flex items-center'>
            <img className=" w-12 h-12 rounded-md" alt="app-logo.png" src={APP_LOGO}></img>
            <p className="font-serif font-bold text-xl ml-10">{AppText.header}</p>
        </div>
    )
}

export default Header;