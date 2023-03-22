import { React, useState, useEffect } from 'react'
import ResultAnswer from './ResultAnswer'

export default function Results(props) {
    const { index, answers, correctAnswerIndex, question, selectedAnswers, reset, handleReset } = props
    const [currentReview, setCurrentReview] = useState(0)
    
    /*----- automatically rotates through question review ------*/

    useEffect(() => {
        const timer = setInterval(() => {
            if(currentReview < 4) {
                setCurrentReview(currentReview => currentReview + 1)
            } else {
                handleReset()
                clearInterval(timer)
            }
        }, 4000)
        return () => clearInterval(timer)
    }, [answers.length, currentReview, reset, handleReset])

    const answerElements = answers.map((answer, index) => (
        <ResultAnswer 
            key={index}
            index={index}
            answer={answer.text}
            correctAnswerIndex={correctAnswerIndex}
            prevAnswers={selectedAnswers}
            currentReview={currentReview}
            />
        )
    )
    const className = `background${index} ${index === currentReview ? 'card-container-review active' : 'card-container-review'}`

    return (
        <div className={className}>
            <div className="question">{question}</div>
            <div className="answer-container">
                {answerElements}
            </div>
        </div>
    )
}