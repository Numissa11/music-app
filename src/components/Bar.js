import React, { useRef } from 'react';

function Bar({ audioEl, currentSong }) {

    const clickRef = useRef();

    const checkWidth = (e) => {
        let width = clickRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;

        const divprogress = offset / width * 100;
        audioEl.current.currentTime = divprogress / 100 * currentSong.length;
    }

    return (
        <div>
            <div className="navigation">
                <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef} >
                    <div className="seek_bar" style={{width: `${currentSong.progress+"%"}`}}></div>
                </div>
            </div>
        </div>

    )
}

export default Bar