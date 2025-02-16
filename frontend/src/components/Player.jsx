import { useState, useRef, useEffect } from "react";

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// Função para formatar tempo (segundos → MM:SS)
const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
};

// Converte tempo de string "MM:SS" para segundos
const timeInSeconds = (timeString) => {
  const [minutes, seconds] = timeString.split(":").map(Number);
  return minutes * 60 + seconds;
};

const Player = ({ duration, randomIdFromArtist, randomId2FromArtist, audio }) => {
  const audioPlayer = useRef(null);
  const progressBar = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const durationInSeconds = timeInSeconds(duration);

  // Alterna entre play e pause
  const playPause = () => {
    if (audioPlayer.current.paused) {
      audioPlayer.current.play();
      setIsPlaying(true);
    } else {
      audioPlayer.current.pause();
      setIsPlaying(false);
    }
  };

  // Atualiza o tempo e a barra de progresso
  const updateProgress = () => {
    setCurrentTime(audioPlayer.current.currentTime);

    if (progressBar.current) {
      progressBar.current.style.setProperty(
        "--_progress",
        (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
      );
    }
  };

  // Reinicia o estado ao mudar a música
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
  }, [audio]);

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={playPause}
        />

        <Link to={`/song/${randomId2FromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p>{formatTime(currentTime)}</p>

        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>

        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio} onTimeUpdate={updateProgress} />
    </div>
  );
};

// Validação das props com PropTypes
Player.propTypes = {
  duration: PropTypes.string.isRequired,
  randomIdFromArtist: PropTypes.string.isRequired,
  randomId2FromArtist: PropTypes.string.isRequired,
  audio: PropTypes.string.isRequired,
};

export default Player;
