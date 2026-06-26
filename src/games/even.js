import startGame from '../index.js'
import { getRandomNumber } from '../utils/random.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const minNumber = 1
const maxNumber = 100
const isEven = number => number % 2 === 0

const generateQuestion = () => getRandomNumber(minNumber, maxNumber)

const getCorrectAnswer = question => (isEven(question) ? 'yes' : 'no')

const runEvenGame = () => {
  startGame(description, generateQuestion, getCorrectAnswer)
}

export default runEvenGame
