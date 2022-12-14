import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import ReactPlayer from 'react-player';

import {receiveSuccessMessage} from '../redux/util/controller';

const VideoLectures = () => {

    const dispatch = useDispatch();
    const courses = useSelector(state => state.course);

    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

  return (
    <React.Fragment>
      <div className="header">
          <div className="container">
              <div className="header-text">Video Lectures</div>
              <p>Have a look at some of the video lectures that cover different topics in your chosen course</p>
          </div>
      </div>
      <div className="p-60">
          <div className="container">
            <div className="video_container">
                <div className="single_video">
                    <ReactPlayer 
                        url="https://youtu.be/P6Vjnt5mjxI"
                        width="100%"
                        className=""
                        controls={true}
                        pip={true}
                    />
                </div>
                <div className="single_video">
                    <ReactPlayer 
                        url="https://youtu.be/wCc4enIHnhM"
                        width="100%"
                        className=""
                        controls={true}
                        pip={true}
                    />
                </div>
            </div>
          </div>
      </div>
    </React.Fragment>
  );
}

export default VideoLectures;