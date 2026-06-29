import startGame from '../index.js'
import { getRandomNumber } from '../utils/random.js'

const description = 'Find the greatest common divisor of given numbers.'

const minNumber = 1
const maxNumber = 100

const generateQuestion = () => {
  const num1 = getRandomNumber(minNumber, maxNumber)
  const num2 = getRandomNumber(minNumber, maxNumber)
  return `${num1} ${num2}`
}

const getCorrectAnswer = (question) => {
  const [num1Str, num2Str] = question.split(' ')
  let num1 = Math.abs(Number(num1Str))
  let num2 = Math.abs(Number(num2Str))

  while (num2 !== 0) {
    let temp = num1
    num1 = num2
    num2 = temp % num2
  }
  return num1
}

const runGcdGame = () => {
  startGame(description, generateQuestion, getCorrectAnswer)
}
export default runGcdGame
