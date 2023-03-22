import React from 'react'
import blueBlob from '../images/blue.png'
import yellowBlob from '../images/yellow.png'

export default function Reset() {

/*----- Resets the game -----*/

    const reset = () => {
        window.location.reload()
    }

    return (
        <div className="reset-container active">
            <img className="image top-right" src={yellowBlob} alt="background decoration" />
            <img className="image bottom-left" src={blueBlob} alt="background decoration" />
            <h1>Thank you for playing!</h1>
            <div>
                <button className="reset-button glow-effect" onClick={reset}>
                    RESET GAME
                    <svg className="glow-container" >
                        <rect pathLength="100" rx="16px" strokeLinecap="round" className="glow-blur"></rect>
                        <rect pathLength="100" rx="16px" strokeLinecap="round" className="glow-line"></rect>
                    </svg>
                </button>
            </div>
        </div>
    )
}