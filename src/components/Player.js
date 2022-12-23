import React from 'react'
import PlayerControls from './PlayerControls'
import PlayerDetails from './PlayerDetails'

function Player({nextSong, song}) {
  return (
    <div className='c-player'>
        <audio></audio>
        <h4>Playing now</h4>
        <PlayerDetails song={song} />
        <PlayerControls />
        <p><strong>Next up : </strong>{nextSong.name} by {nextSong.artist}</p>
    </div>
  )
}

export default Player