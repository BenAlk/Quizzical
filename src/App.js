import { React, useState } from 'react'
import './App.css'
import Start from './components/Start'
import Game from './components/Game'

export default function App() {

  

  const [gameStarted, setGameStarted] = useState(false) //used for conditional rendering once user chooses level and hits start
  const [quiz, setQuiz] = useState(null) //used for API call, holds data for the quiz
  const [selectedDifficulty, setSelectedDifficulty] = useState(null) //checks for what level of difficulty is selected
  const [loading, setLoading] = useState(false) //handles loading screen on API call


  /*------- handles difficulty selection ------ */

  const difficultySelect = (level) => {
    if (selectedDifficulty !== level) {
      setSelectedDifficulty(level) 
    }
  }
 /*--------- handles game initialization ------ */

  const handleGameStart = async () => {
    if (selectedDifficulty) {
      await getNewGame()
    } else {
      return
    }
  }

/*---------- handles API fetch ---------------- */

  const getNewGame = async () => {
    try {
      setLoading(!loading)
      const response = await fetch(`https://opentdb.com/api.php?amount=5&difficulty=${selectedDifficulty.toLowerCase()}&type=multiple&encode=url3986`);
      const data = await response.json();
      const formattedQuiz = data.results.map((question, index) => {
        const answers = [...question.incorrect_answers, question.correct_answer]
        answers.sort(() => Math.random() - 0.5)
        const correctAnswerIndex = answers.indexOf(question.correct_answer)
        const formattedAnswers = answers.map(answer => {
          return {
            text: decodeURIComponent(answer),
            selected: false,
            key: index
          }
        });
        return {
          question: decodeURIComponent(question.question),
          answers: formattedAnswers,
          correctAnswerIndex: correctAnswerIndex,
        }
      })
      setQuiz(formattedQuiz);
      setTimeout(() => {
        setGameStarted(!gameStarted)
        setLoading(!loading)
      }, 5000)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main>
      {!gameStarted && 
        <Start 
          whichDifficulty={selectedDifficulty} 
          handleDifficulty={difficultySelect} 
          handleStart={handleGameStart}
          loading={loading}
        />
      }

      {gameStarted && <Game quiz={quiz}/>}
    </main>
  )
}

