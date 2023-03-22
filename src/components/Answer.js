import React from 'react'

export default function Answer(props) {
    const {index, answer, nextCard, correctAnswerIndex, selectedAnswerIndex, setSelectedAnswerIndex } = props

    const classes = `glow-effect answer ${index === selectedAnswerIndex ? 'selected' : ''}`

    const timerNextCard = () => {
        setSelectedAnswerIndex(index)
        setTimeout(() => {
            nextCard(index, correctAnswerIndex)
        }, 100)
    }


    return (
        <div className={classes} onClick={timerNextCard}>
        {answer}
        <svg className="glow-container" >
            <rect pathLength="100" rx="8px" strokeLinecap="round" className="glow-blur"></rect>
            <rect pathLength="100" rx="8px" strokeLinecap="round" className="glow-line"></rect>
        </svg>
    </div>
    )
}