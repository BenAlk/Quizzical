import {React, useState } from 'react'
import Card from "./Card"
import Results from "./Results"
import Score from "./Score"
import Reset from "./Reset"

export default function Game(props) {
    const { quiz } = props
    const [currentCard, setCurrentCard] = useState(0) //keeps track of current card being displayed
    const [selectedAnswers, setSelectedAnswers] = useState([]) //keeps track of selected answers
    const [correctAnswers, setCorrectAnswers] = useState([]) //keeps track of correct answers
    const [score, setScore] = useState(0) //keeps track of score
    const [gameComplete, setGameComplete] = useState(false) //used for conditional rendering once the game is completed
    const [review, setReview] = useState(false) //used for conditional rendering if the user wants to review the game
    const [reset, setReset] = useState(false) //used to reset the game
    
    const length = quiz.length  


    /*---------------------- handles carousel movement ------------------------- */
    /*------- as well as keeping score, and checking for end of game ----------- */

    const nextCard = (index, correctAnswerIndex) => {
        setSelectedAnswers(prevSelected => [...prevSelected, index])
        setCorrectAnswers(prevCorrect => [correctAnswerIndex, ...prevCorrect])

        if (index === correctAnswerIndex) {
            setScore(score + 1)
        }

        setCurrentCard(currentCard === length - 1 ? setGameComplete(true) : currentCard + 1)
    }
/*----- Handles Reset option ------- */

    const handleReset = () => {
        setReset(!reset)
        setReview(!review)
    }

/*------ handles reviewing answers option ------- */
    const reviewAnswers = () => {
        setReview(!review)
        setGameComplete(!gameComplete)
    }

    const cardElements = quiz.map((question, index) => {
        return (
            <Card
                key={index}
                index={index}
                nextCard={nextCard}
                currentCard={currentCard}
                question={question.question}
                answers={question.answers}
                correctAnswerIndex={question.correctAnswerIndex}
                selectedAnswer={selectedAnswers}
                correctAnswers={correctAnswers}
                />
        )
    })

    const reviewElements = quiz.map((question, index) => {
        return (
            <Results 
                key={index}
                index={index}
                question={question.question}
                answers={question.answers}
                correctAnswerIndex={question.correctAnswerIndex}
                selectedAnswers={selectedAnswers[index]}
                reset={reset}
                handleReset={handleReset}
            />
        )
    })

    return (
        <div className="carousel">
            {!gameComplete && cardElements}
            {gameComplete && <Score score={score} length={length} reviewAnswers={reviewAnswers} review={review}/>}
            {review && !gameComplete && reviewElements}
            {reset && <Reset />}
        </div>
    )
}
