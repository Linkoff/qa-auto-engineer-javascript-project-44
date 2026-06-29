import startGame from '../index.js'
import { getRandomNumber } from '../utils/random.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const minNumber = 1
const maxNumber = 100

const generateQuestion = () => getRandomNumber(minNumber, maxNumber)

const isPrime = (number) => {
  if (number < 2) {
    return false
  }
  if (number === 2) {
    return true
  }
  if (number % 2 === 0) {
    return false
  }
  const sqrtNumber = Math.sqrt(number)
  for (let i = 3; i <= sqrtNumber; i += 2) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

const getCorrectAnswer = question => (isPrime(question) ? 'yes' : 'no')

const runPrimeGame = () => {
  startGame(description, generateQuestion, getCorrectAnswer)
}

export default runPrimeGame
