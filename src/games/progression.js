import startGame from '../index.js'
import { getRandomNumber } from '../utils/random.js'

const description = 'What number is missing in the progression?'

const minNumber = 1
const maxNumber = 20
const minLength = 5
const maxLength = 10

let correctAnswer

const generateQuestion = () => {
  const numberElements = getRandomNumber(minLength, maxLength)
  const hiddenIndex = getRandomNumber(0, numberElements - 1)
  const start = getRandomNumber(minNumber, maxNumber)
  const step = getRandomNumber(minNumber, maxNumber)
  const arrElements = []
  for (let i = 0; i < numberElements; i++) {
    let currentElement = start + i * step
    arrElements.push(currentElement)
  }
  correctAnswer = arrElements[hiddenIndex]

  arrElements[hiddenIndex] = '..'
  return arrElements.join(' ')
}

const getCorrectAnswer = () => correctAnswer

const runProgressionGame = () => {
  startGame(description, generateQuestion, getCorrectAnswer)
}
export default runProgressionGame
