import React, { useState, useRef, useEffect } from 'react'
import Bar from './Bar';
import Controls from './Controls'
import Details from './Details'

function Player({ currentSongIndex, setCurrentSongIndex, nextSongIndex, songs }) {

  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState([]);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const onPlaying = () => {
    const duration = audioEl.current.duration;
    const ct = audioEl.current.currentTime;
    setCurrentSong({ "progress": ct / duration * 100, "length": duration })
  }

  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    }
    else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = songs.length - 1;
        }

        return temp;
      });
    }
  }

  return (
      <div className="c-player">
        <audio src={songs[currentSongIndex].audio} ref={audioEl} onTimeUpdate={onPlaying} />
        <h4>Playing now</h4>
        <Details song={songs[currentSongIndex]} />
        <Bar currentSong={currentSong} audioEl={audioEl} />
        <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
        <p>Next up: <span>{songs[nextSongIndex].title} by {songs[nextSongIndex].artist}</span></p>
      </div>
  )
}

export default Player