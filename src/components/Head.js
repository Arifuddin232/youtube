import React from 'react'
import { toggleMenu } from '../utils.js/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { YOUTUBE_SEARCH_API } from '../utils.js/constants'
import { cacheResults } from '../utils.js/searchSlice'
const Head = () => {
const [searchQuery,setSearchQuery]=useState("");
const [suggestions,setSuggestions]=useState([]);
const[showSuggestions,setShowSuggestions]=useState(false);
const searchCache=useSelector((store)=>store.search);

useEffect(()=>{
const timer=setTimeout(()=>{
  if(searchCache[searchQuery]){
    setSuggestions(searchCache[searchQuery]);
  }else{
    getSearchSuggestions()
  }},200);
return()=>{
  clearTimeout(timer);
};
},[searchQuery]);

const getSearchSuggestions=async()=>{
const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
const json=await data.json();
setSuggestions(json[1]);
//update cache
dispatch(cacheResults({[searchQuery]:json[1]}))
};

  const dispatch=useDispatch();
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className=" grid grid-cols-4 gap-2 w-full bg-red-600" >
    <div className=" m-4 w-1/12 col-span-1/4">
    <img onClick={()=>toggleMenuHandler()} className="cursor-pointer"
     alt="menu"src="https://cdn-icons-png.flaticon.com/128/4254/4254068.png"></img>
    </div>
    
    <div className="m-0 h-1/4 w-1/4 py-6 col-span-1/4">
    <img alt="youtube-logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"></img>
    </div>
    
    <div className=" flex justify-between py-6 m-0 col-span-5/4 w-full ">
      <div>
    <input type="text" className=" w-3/4  " value={searchQuery}
     onChange={(e)=>setSearchQuery(e.target.value)}
     onFocus={()=>setShowSuggestions(true)}
     onBlur={()=>setShowSuggestions(false)}/>
    <button className="ml-25 bg-yellow rounded-bl rounded-br bg-pink-500 cursor-pointer hover:bg-orange-600">Search</button>
    </div>
    {showSuggestions && (
    <div className='absolute my-7 py-2 w-40 bg-blue-300  ' >
      <ul >
       {suggestions.map((s)=>(
       <li key={s}className='py-2 px-3  hover:bg-gray-100'>
            {s}
       </li>))}   
      </ul>
    </div>)}
    </div>
    <div className=" mx-100 py-4 col-span-1/4  w-1/6 ">
      <img alt="userIcon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"></img>
    </div>
    </div>
  )

  }  
export default Head;
