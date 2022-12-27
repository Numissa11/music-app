import React from 'react'

function Menu({ songs, setCurrentSongIndex }) {

    const onChangeSong = (e, i) => {
        setCurrentSongIndex(i)
    };

    return (
        <div >
            <div className='menu-img'>
                {songs.map((song,i) => {
                    return <div key={song.id} className='menu'> 
                        <img
                        src={song.cover}
                        onClick={e => onChangeSong(e, i)} />
                        <div className='menu-title'>{song.name}</div>
                        </div>
                })}
            </div>
        </div>
    )

}

export default Menu