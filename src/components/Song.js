import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

function Song() {
  return (
    <div className="song-container">
      <div className="time-control">
        <p>start time</p>
        <input type="range" />
        <p>end time </p>
      </div>
      <div className="player-control">
        {/* <FontAwesomeIcon icon={faPlay} /> */}
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon className="play" icon={faPlay} size="2x" />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
        />
      </div>
    </div>
  );
}

export default Song;
