import React, { useEffect,useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux' 
import { putMessage } from './cslice.js/cSlice'
import { generateRandomName, makeRandomMessage } from '../utils.js/helper'

const LiveChat = () => {
    const dispatch=useDispatch();
    const [liveMessage, setLiveMessage] = useState("");

    const cMessage=useSelector((store)=>store.chatting.message);

    useEffect(()=>{
        const i=setInterval(()=>{
            //API Polling
        
         dispatch(putMessage({
          name:generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",


         }))
        },2000);
        return ()=>clearInterval(i);
      },[])
  return (
    < div>
    <div  className='w-full h-[600px] mt-5 ml-0 mr-0 p-5 border border-black
    bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse'>
   <div> {
    cMessage.map((c,i)=>
    (<ChatMessage  key={i} name={c.name} message={c.message}/>
    ))}
    </div> 
   </div>
   <form
   className="w-full p-2 my-3 rounded-lg border border-black"
   onSubmit={(e) => {
     e.preventDefault();

     dispatch(
       putMessage({
         name: "Arifuddin",
         message: liveMessage,
       })
     );
     setLiveMessage("");
   }}
 >
   <input
     className="my-5 px-2 w-3/4"
     type="text"
     value={liveMessage}
     onChange={(e) => {
       setLiveMessage(e.target.value);
     }}
   />
   <button className="px-3 mx-2 bg-green-300 rounded-lg">Send</button>
 </form>

 </div>
  )
}

export default LiveChat;
