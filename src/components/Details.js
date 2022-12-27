import React from 'react'

function Details({ song }) {

  return (
    <div className='c-player--details'>
      <div className='details-img'>
        <img alt='cover' src={song.cover} />
      </div>
      <h3 className='details-title' >{song.name}</h3>
      <h4 className='details-artist'>{song.artist}</h4>
    </div>

  )
}

export default Details