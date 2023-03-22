import React from 'react'

export default function Score(props) {

const { score, length, reviewAnswers, review } = props
const percent = (score / length) * 100

/*------- initiates review of quiz -------*/

    const handleReview = () => {
        reviewAnswers(review)
    }
    
/*------ Resets the game ------*/

    const reset = () => {
        window.location.reload()
    }

    return (
        <div className="card-container active">
            <div className="score-info">
                <h2> Your Score is:</h2>
                <h2>{score} questions correct out of a possible {length} questions.</h2>
                <h2>{percent}%</h2>
                <h2>Would you like to compare your answers?</h2>
            </div>
            <div className="answer-container">
                <div className="start-button yes glow-effect" onClick={handleReview}>
                    Yes
                    <svg className="glow-container" >
                        <rect pathLength="100" rx="16px" strokeLinecap="round" className="glow-blur"></rect>
                        <rect pathLength="100" rx="16px" strokeLinecap="round" className="glow-line"></rect>
                    </svg>
                </div>
                <div className="start-button no glow-effect" onClick={reset}>
                    No
                    <svg className="glow-container" >
                        <rect pathLength="100" rx="16px" strokeLinecap="round" className="glow-blur"></rect>
                        <rect pathLength="100" rx="16px" strokeLinecap="round" className="glow-line"></rect>
                    </svg>
                </div>
            </div>
        </div>
    )
}