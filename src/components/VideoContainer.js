import React from 'react'
import YouTube from 'react-youtube';
import DescriptionTabs from './DescriptionTabs';


export default function VideoContainer(props) {
    const {
        data,
        isFirst,
        isLast,
        onNext,
        onPrev
    } = props;

    const opts = {
        height: '450',
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
                <YouTube videoId={data.id} opts={opts} onReady={() => {
                    console.log('On Ready');
                }} />
            </div>
            <div>
                <DescriptionTabs data={data} isFirst={isFirst} isLast={isLast} onNext={onNext} onPrev={onPrev}/>
            </div>
          </div>
      );
}
