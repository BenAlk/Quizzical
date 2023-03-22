import {React, useState} from 'react'
import Level from './Level'
import blueBlob from '../images/blue.png'
import yellowBlob from '../images/yellow.png'

export default function Start (props) {
    const {handleDifficulty, handleStart, loading} = props
    const levels = ["Easy", "Medium", "Hard"]
    const [selectedLevel, setSelectedLevel] = useState(null)

    /*----- handles conditional rendering for level -----*/
    /*-------- as well as difficulty selection  ---------*/
    const handleLevelSelect = (level) => {
        setSelectedLevel(level)
        handleDifficulty(level)
    }

    return (
        <div className="container">
            {loading ?  (<div className="container">
                            <img className="image top-right" src={yellowBlob} alt="background decoration" />
                            <img className="image bottom-left" src={blueBlob} alt="background decoration" />
                            <div className="loader"></div>
                        </div>) : 
                        (<div className="start-container">
                            <img className="image top-right" src={yellowBlob} alt="background decoration" />
                            <img className="image bottom-left" src={blueBlob} alt="background decoration" />
                            <h1>Quizzy McQuizface</h1>
                            <p>the name says it all!</p>
                            <div className="start-button glow-effect" onClick={handleStart}>
                                 Start Quiz
                                <svg className="glow-container" >
                                    <rect pathLength="100" rx="16px" strokeLinecap="round" className="glow-blur"></rect>
                                    <rect pathLength="100" rx="16px" strokeLinecap="round" className="glow-line"></rect>
                                </svg>
                            </div>
                            <div className="level-container">
                                {levels.map((level, index) => (
                                <Level
                                key={index}
                                level={level}
                                selected={level === selectedLevel}
                                difficultySelect={() => handleLevelSelect(level)}
                                />
                            ))}
                            </div>
                        </div>
                        )
            }

        </div>
    )
}