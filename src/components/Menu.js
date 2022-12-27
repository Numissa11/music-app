import React from 'react'

function Menu({ songs, setCurrentSongIndex }) {

    const onChangeSong = (e, i) => {
        setCurrentSongIndex(i)
    };

    return (
        <div className='menu'>
            <div className='menu-img'>
                {songs.map((song,i) => {
                    return <img
                        src={song.cover}
                        key={song.id}
                        onClick={e => onChangeSong(e, i)} />
                })}
            </div>
        </div>
    )

}

export default Menu