import React from 'react';
import ReactPlayer from 'react-player/lazy';

const VideoPlayer = ()=>{
    return(
        <div className='video-container'>
            <ReactPlayer
             url={'https://www.youtube.com/watch?v=Is2WFlkA1zk'}
             controls={true}
             config={{
                youtube: {
                  playerVars: { showinfo: 1 }
                }
            }}
            height={"100%"}
            width={"100%"}
             />
        </div>
    )
}

export default VideoPlayer;