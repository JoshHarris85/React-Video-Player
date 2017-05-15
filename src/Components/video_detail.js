import React from 'react';

const VideoDetail = ({video}) => {
  // ajax spinner mainly on parent level components
  if(!video){
    return<div>Loading...</div>
  }

  const videoId = video.id.videoId;
  // const url = 'https://www.youtube.com/embed/' + videoId;
  // or template strtings (button left of the 1 (ticks) as quote strings)
  // then use ${} for js variables
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">

      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>

    </div>
  );
};

export default VideoDetail;
