import React from 'react'
import { useState } from 'react';

const Demo = () => {
    const [text,setText]=useState("");
    console.log("rendering");
  return (
    <div className="m-4 p-2 w-96 h-96 border border-black ">
        <input
        type='text'
        onChange={(e)=>(setText(e.target.value))}
        value={text}
        />
    
    </div>
  )
}

export default Demo
