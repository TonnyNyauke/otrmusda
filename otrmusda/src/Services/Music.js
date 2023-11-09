import React, { useEffect, useState } from 'react'
import Services from './Services'

function Music() {
  const [musicVideos, setMusicVideos] = useState([]);

  useEffect(() => {
    fetch('/musicvideos').then(response => response.json).then(data => setMusicVideos);
  },[])
  return (
    <Services>
      {musicVideos.map(video => (
        <div key={video.title}>
          <h2>{video.title}</h2>
          <p>{video.description}</p>
          <video src={video.file_path} controls/>
        </div>
      ))}
      </Services>
  )
}

export default Music