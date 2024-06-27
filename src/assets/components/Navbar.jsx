import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    const [SearchData, setSearchData] = useState('')    
    const handleSearch = () => {
        navigate(`/searchresult?query=${SearchData}`)
    }
  return (
    <div className="flex justify-between px-4 md:px-12 py-3 w-screen">
      <h1 onClick={() => navigate('/')} className="font-extrabold text-lg md:text-4xl hover:cursor-pointer">Z-Movie</h1>
      <div className="flex gap-3 md:w-100">
        <input value={SearchData} onChange={(e) => setSearchData(e.target.value)} type="text" placeholder="Search Movie" className="md:px-2 border focus:outline-none border-red-600 rounded-xl"/>
        <button onClick={handleSearch} className="hover:cursor-pointer">Search</button>
      </div>      
    </div>
  );
};
