import React from "react";

function Player({ currentSong }) {
  return (
    <div>
      <h1>{currentSong.name}</h1>
      <h2>Song name</h2>
      <h4>Artist</h4>
    </div>
  );
}

export default Player;
