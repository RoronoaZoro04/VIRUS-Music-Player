import React, { useState } from "react";
import "../Styles/MusicPlayer.css";
import {
  FaBackward,
  FaForward,
  FaHeart,
  FaPause,
  FaPlay,
  FaRegHeart,
  FaShareAlt,
  FaStepBackward,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

function MusicPlayer(song: any, imgSrc: any) {
  const [isLove, setLoved] = useState(false);
  const [isPlaying, setPlaying] = useState(false);


  const changeplayPause = () => {
    setPlaying(!isPlaying)
    
  };

  const changeLoved = () => {
    setLoved(!isLove);
  };
  return (
    <div className="musicPlayer">
      <div className="songImage">
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAdE4FJ2Y7sUO_R6ZH5WfJwWgDsh2v-wnqIno934YcqHDUeJMuGUHZxU6nFFxU_QQpz-8&usqp=CAU" alt="" />
      </div>
      <div className="songAttributes">
        <audio src="{song}" preload="metadata" ></audio>
        <div className="top">
          <div className="left">
            <div className="loved" onClick={changeLoved}>
              {isLove ? (
                <i>
                  <FaHeart />
                </i>
              ) : (
                <i>
                  <FaRegHeart />
                </i>
              )}
            </div>
            <div className="download">
              <i>
                <BsDownload />
              </i>
            </div>
          </div>
          <div className="middle">
            <div className="backward">
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="playPause" onClick={changeplayPause}>
              {isPlaying ? (
                <i>
                  <FaPlay />
                </i>
              ) : (
                <i>
                  <FaPause />
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepBackward />
              </i>
            </div>
          </div>
          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>
        <div className="bottom">
          <div className="currentTime">00:00</div>
          <input type="range" className="progressBar" />
          <div className="duration">00:00</div>
        </div>
      </div>
    </div>
  );
}

export { MusicPlayer };
