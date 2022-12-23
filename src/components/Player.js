import React from 'react'

function Player({nextSong}) {
  return (
    <div className='c-player'>
        <audio></audio>
        <h4>Playing now</h4>
        <p><strong>Next up : </strong>{nextSong.name} by {nextSong.artist}</p>
    </div>
  )
}

export default Player