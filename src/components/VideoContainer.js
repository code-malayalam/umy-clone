import React from 'react'
import YouTube from 'react-youtube';
import DescriptionTabs from './DescriptionTabs';


export default function VideoContainer(props) {
    const {
        videoId
    } = props;
    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
            autoplay: 1,
            start: 0,
            rel: 0
          // https://developers.google.com/youtube/player_parameters
        },
      };
  
      return (
          <div>
              <div>
                <YouTube videoId={videoId} opts={opts} onReady={() => {
                    console.log('On Ready');
                }} />
            </div>
            <div>
                <DescriptionTabs />
            </div>
          </div>
      );
}
