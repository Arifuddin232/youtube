import React from 'react'

const VideoCard = ({info}) => {
    if (!info ||!info.snippet) {
        return null; 
      }
const{ snippet, statistics}=info;
const{ channelTitle, thumbnails}=snippet;

  return (

<div className='mx-5 my-5 text-bold text-black bg-white shadow-2xl rounded-xl  ' >
        <img className="py-0  shadow-lg" alt="pic" src={thumbnails.medium.url}/>
      <div>  <ul>
            
            <div className='text-center font-bold'><li>{channelTitle}</li></div>
           <div className='text-center'><li>{statistics.viewCount}Views</li></div> 
        </ul>
        </div>
    </div>
  )
}

export default VideoCard
