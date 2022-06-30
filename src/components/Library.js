import { library } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import LibrarySong from "./LibrarySong";

function Library({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h1>Library</h1>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              song={song}
              setCurrentSong={setCurrentSong}
              key={song.id}
              audioRef={audioRef}
              isPlaying={isPlaying}
              songs={songs}
              id={song.id}
              setSongs={setSongs}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Library;
