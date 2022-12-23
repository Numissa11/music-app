import React, { useState } from 'react';
import chillHop from './data';
import Player from '../src/components/Player'

function App() {

  const [songs] = useState(chillHop());

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div className="App">
      <Player
        song={songs[currentSongIndex]}
        nextSong={songs[nextSongIndex]}
      />
    </div>
  );
}

export default App;
