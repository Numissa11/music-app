import React, { useState, useEffect } from 'react';
import chillHop from './resources/data';
import Player from '../src/components/Player'
import Menu from './components/Menu';

function App() {

  const [songs] = useState(chillHop());

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Menu 
      currentSongIndex={currentSongIndex}
      songs={songs}
      setCurrentSongIndex={setCurrentSongIndex}
      />
      <div className='separator'></div>
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
