import React,{useEffect} from 'react'
import { useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils.js/constants'
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const[videos,setVideos]=useState([]);
  useEffect(()=>{
    getVideos()}
  ,[])
  const getVideos=async()=>{
    const data=await fetch(YOUTUBE_VIDEOS_API);
    const json=await data.json();
    setVideos(json.items);
  
  }
  return (
    <div className=' flex flex-wrap justify-center '>
    {videos.map((video, index) => (
<a key={index} href={"/watch?v="+video?.id}><VideoCard key={index} info={video} />
</a>

    ))}
  </div>)}
  

export default VideoContainer
