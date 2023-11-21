import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center'>
     <img className="h-8" alt="userIcon" 
     src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png">    
     </img>
     <span className='px-2 font-bold'>{name}</span>
     <span>{message}</span>
    </div>
  )
}

export default ChatMessage
