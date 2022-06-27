//styles
import "./styles/app.scss";
import Song from "./components/Song";
import Player from "./components/Player";
import data from "./components/util";
import { useState } from "react";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Player currentSong={currentSong} />
      <Song />
    </div>
  );
}

export default App;
