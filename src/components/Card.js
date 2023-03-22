import { React, useState } from 'react'
import Answer from './Answer'

export default function Card(props) {
    const { index, nextCard, currentCard, answers, correctAnswerIndex, question } = props
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    
        const answerElements = answers.map((answer, index) => (
            <Answer 
                key={index}
                index={index}
                answer={answer.text}
                nextCard={nextCard}
                correctAnswerIndex={correctAnswerIndex}
                selectedAnswerIndex={selectedAnswerIndex}
                setSelectedAnswerIndex={setSelectedAnswerIndex}
            />
            )
        )

        const className = `background${index}  ${index === currentCard ? 'card-container active' : 'card-container'}`

    return (
        <div className={className}>
            <div className="question">{question}</div>
            <div className="answer-container">
                {answerElements}
            </div>
        </div>
    )
}