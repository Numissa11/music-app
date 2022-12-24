import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'

function PlayerControls(props) {
    return (
        <div className="c-player--controls">
            <button className="skip-btn" >
                <FontAwesomeIcon icon={faBackward} onClick={() => props.SkipSong(false)} />
            </button>
            <button className="play-btn" >
                <FontAwesomeIcon icon={faPlay} onClick={() => props.setIsPlaying(!props.isPlaying)} />
            </button>
            <button className="skip-btn" >
                <FontAwesomeIcon icon={faForward}  onClick={() => props.SkipSong()} />
            </button>
        </div>
    )
}

export default PlayerControls