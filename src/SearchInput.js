import { useState } from "react";

const SearchInput =()=>{
    const [searchInput, setSearchInput] = useState("");
    return(
        <div className="seach-input-container">
        <input
          className="seach-view p-2"
          type="text"
          placeholder="Seach any Songs"
          value={searchInput}
          onChange={(e)=>setSearchInput(e.target.value)}
        ></input>
        {/* <img
          src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
          alt="seach-logo"
          className="seach-icon"
        ></img> */}
        <button className=" p-2 pr-3 pl-3 rounded-md bg-black text-white text-sm">Seach</button>
      </div>
    )
}

export default SearchInput;