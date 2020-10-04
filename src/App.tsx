import React, {useState} from 'react';
import { fetchQuizQuestions } from './API'
// Component
import QuestionCard from './components/question-card'
// Types
import { QuestionState, Difficulty } from './API'

const TOTAL_QUESTIONS = 10; 

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;

}
const App = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)


 console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))
  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    
  }

  const nextAnswer = () => {

  }

  return (
    <div>
       <h1>REACT QUIZ</h1>
       <button className="start" onClick={startTrivia}>Start Quiz</button>
       <p className="score">
         Score:
       </p>
       <p>Loading Question</p>
          {/* <QuestionCard 
            questionNr={number + 1}
            totalQuestions = {TOTAL_QUESTIONS} 
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          /> */}
       <button className="next">Next</button>

    </div>
  );
}

export default App;
