import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils.js/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  const videoId = searchParams.get("v"); 
  const validVideoId = typeof videoId === 'string' ? videoId : null;
  const encodedVideoId = validVideoId ? encodeURIComponent(validVideoId) : null;
  const src = encodedVideoId ? `https://www.youtube.com/embed/${encodedVideoId}` : null;

  return (
    <div className=''>
      <div className='flex flex-cols px-5'>
    <div className="w-3/4 mt-5 rounded-2xl">
      {src ? (
        <iframe
          width="900"
          height="600"
          src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <p>No valid video ID found in the URL</p>
      )}
    </div>
    <div className='w-1/4'>
      <LiveChat/>
    </div>
    </div>
    <CommentContainer/>
    </div>
  );
};

export default WatchPage;
