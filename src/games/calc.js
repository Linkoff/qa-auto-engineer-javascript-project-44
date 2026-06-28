import startGame from '../index.js'
import { getRandomNumber, getRandomOperator } from '../utils/random.js'

const description = 'What is the result of the expression?'

const minNumber = 1
const maxNumber = 25

const generateQuestion = () => {
  const num1 = getRandomNumber(minNumber, maxNumber)
  const num2 = getRandomNumber(minNumber, maxNumber)
  const operator = getRandomOperator()
  return `${num1} ${operator} ${num2}`
}

const getCorrectAnswer = (question) => {
  const [num1Str, operator, num2Str] = question.split(' ')
  const num1 = Number(num1Str)
  const num2 = Number(num2Str)

  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      return 0
  }
}

const runCalcGame = () => {
  startGame(description, generateQuestion, getCorrectAnswer)
}
export default runCalcGame
