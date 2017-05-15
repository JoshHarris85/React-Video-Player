import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  // mapping every video to its own li
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video} />
    );
  });
  // return the actual HTML with the video info
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList
