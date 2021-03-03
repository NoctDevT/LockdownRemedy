import "./styles.css";
import React, { useState, useRef, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faVolumeMute, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

import ReactAudioPlayer from "react-audio-player";

import { data } from "./data";
import { VideoPlayer } from "./VideoPlayer";

library.add(fab, faVolumeMute, faVolumeUp);

var currentLocation = null;

export default function App() {
  return <Video />;
}

// const listItems = data.map((data, index) => (
//   <li
//     className="listItem"
//     key={index}
//     onClick={() => {
//       currentLocation = data;
//     }}
//   >
//     {data.location}
//   </li>
// ));


function Video() {

  const [currentData, setData] = useState(currentLocation);

  const [video, setVideo] = useState();
  const [audio, setAudio] = useState(true);
  const [volume, setVolume] = useState(0.7);
   
  const [radio, setRadio] = useState();

  useEffect(() => {
    if(currentData != null) {
    setVideo(currentData.contents[0].url.[0])
    setRadio(currentData.contents[1]);
    } else {
    setVideo('50Uf_T12OGY')  
    };
   }, [currentData])


  return (
    <>
      <VideoPlayer youtubeId={video} audio={audio}  />
      <AudioPlayer radio={radio} volume={volume}/>
      <div className="interface">
        <div className="layout">
          <div className="listContainer">
            <ul className="CountryList">
              {data.map((data, index) => (
                <li
                  className="listItem"
                  key={index}
                  onClick={() => {
                    setData(data);
                  }}
                >
                  {data.location}
                </li>
              ))}
            </ul>
          </div>

          {/* <div className="Title">controls</div> */}

          <button className="muteBtn" onClick={(e) => setAudio(!audio)}>
            {!audio ? (
              <FontAwesomeIcon icon={faVolumeUp} style={{ color: "white" }} />
            ) : (
              <FontAwesomeIcon icon={faVolumeMute} style={{ color: "white" }} />
            )}
          </button>

          <div className="slidecontainer">
            <p>Radio Volume</p>
            <input
              type="range"
              min="1"
              max="100"
              defaultValue={volume}
              onChange={(e) => setVolume(parseInt(e.target.value, 10))}
            />
          </div>
          <div className="buttons">
            <button className="Btn" onClick={(e) => setVideo("aVMkvCTT_yg")}>
              Change Video
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

//
const AudioPlayer = ({ audio, volume, radio }) => {
  // audio = "https://stream-kiss.planetradio.co.uk/kiss100.mp3";

  var radioUrl= radio? radio.radioUrl[0] : "https://stream-mz.planetradio.co.uk/magic1054.mp3"  ;
  console.log(radio)
  return (
    <ReactAudioPlayer
      src={radioUrl}
      onPlay={() => {}}
      volume={volume/100}
      controls={false}
      autoPlay
    />
  );
};
