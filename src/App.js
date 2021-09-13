import "./style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import Cd from "./img/png/CD.png";
import Player from "./img/png/player.png";
import { Row, Col } from "reactstrap";

//audio files
import classic from "./audio/classic.wav";
import spatial from "./audio/spatial.mp3";
import stereo from "./audio/stereo.wav";
import superbass from "./audio/superbass.wav";
import vocal from "./audio/vocal.wav";
import volume from "./audio/volume.wav";

export default function App() {
  const [audio, setAudio] = useState("");
  const [selectedSong, setSelectedSong] = useState("");
  const [isPlaying, setPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  useEffect(() => {
    //play and  pause of each song selection
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
      audio.loop = true;
    }
  }, [audio, isPlaying]);

  const renderSong = (theSong) => {
    if (theSong !== selectedSong) {
      if (audio) {
        audio.pause();
        setAudio("");
      }
      setPlaying(true);
      setAudio(new Audio(theSong));
      setSelectedSong(theSong);
    } else if (isPlaying) {
      setPlaying(false);
      audio.pause();
      // setAudio("");
      // setSelectedSong("");
    } else if (!isPlaying) {
      setPlaying(true);
      audio.play();
      //  setAudio("");
      //  setSelectedSong("");
    }
  };
  // if (isLoading)
  //   return (

  //   );
  return (
    <>
      <div className="container-1 noSelect">
        {isLoading ? (
          <Loader
            type="Rings"
            color="black"
            style={{ textAlign: "center", height: "100vh", marginTop: "44vh" }}
          />
        ) : (
          <div className="main-grid">
          <div className="image-container">
            <div className="image-stack">
              <div className="image-stack__item image-stack__item--top">
                <img
                  src={Cd}
                  alt=""
                  className={isPlaying ? "img-top-play" : "img-top"}
                />
                </div>
                <div className="image-stack__item image-stack__item--bottom">
                  <img src={Player} alt="" className="img-bottom" />
                </div>
              </div>
            </div>
            <div className="play-list-stack">
              <ul className="play-list">
                <input
                  id="radio_1"
                  type="radio"
                  name="btnControl"
                  className="radio isHidden"
                />
                <label htmlFor="radio_1">
                  <li
                    onClick={() => {
                      renderSong(spatial);
                    }}
                  >
                    Spatial Surround
                  </li>
                </label>
                <br />
                <input
                  id="radio_2"
                  type="radio"
                  name="btnControl"
                  className="radio isHidden"
                />
                <label htmlFor="radio_2">
                  <li
                    onClick={() => {
                      renderSong(superbass);
                    }}
                  >
                    Super bass
                  </li>
                </label>
                <br />
                <input
                  id="radio_3"
                  type="radio"
                  name="btnControl"
                  className="radio isHidden"
                />
                <label htmlFor="radio_3">
                  <li
                    onClick={() => {
                      renderSong(volume);
                    }}
                  >
                    Volume Booster
                  </li>
                </label>
                <br />
                <input
                  id="radio_4"
                  type="radio"
                  name="btnControl"
                  className="radio isHidden"
                />
                <label htmlFor="radio_4">
                  <li
                    onClick={() => {
                      renderSong(classic);
                    }}
                  >
                    Classic Rock
                  </li>
                </label>
                <br />
                <input
                  id="radio_5"
                  type="radio"
                  name="btnControl"
                  className="radio isHidden"
                />
                <label htmlFor="radio_5">
                  <li
                    onClick={() => {
                      renderSong(stereo);
                    }}
                  >
                    Stereo Widening
                  </li>
                </label>
                <br />
                <input
                  id="radio_6"
                  type="radio"
                  name="btnControl"
                  className="radio isHidden"
                />
                <label htmlFor="radio_6">
                  <li
                    onClick={() => {
                      renderSong(vocal);
                    }}
                  >
                    Vocal Enhancer
                  </li>
                </label>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
