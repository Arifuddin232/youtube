import React from 'react'
import { useSelector } from 'react-redux';
const Vertical = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  if(!isMenuOpen)return null;

  return (
    <div className=" bg-slate-500 pl-10 col-span-1 ">
      <ul className="py-5">
        <li>
          <a href='/'>Home</a>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Li</li>
      </ul>
            <p className="text-xl font-bold">Subscriptions
</p>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <p className="text-xl font-bold">Watch Later
</p>      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default Vertical
