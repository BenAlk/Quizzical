import { React } from 'react'

export default function ResultAnswer(props) {
    const {index, answer, correctAnswerIndex, prevAnswers } = props
    
    const classes = `result-answer ${index === correctAnswerIndex ? 'correct' : ''} ${index === prevAnswers ? 'selected' : ''} ${index === correctAnswerIndex && index === prevAnswers ? 'correct-selected' : ''}` 

    return (
        <div className={classes}>
            {answer}
        </div>
    )
}