#!/usr/bin/env node

import readlineSync from 'readline-sync'
import greetUser from '../src/cli.js'

const isEven = number => number % 2 === 0

// Генерация случайного числа
const getRandomNumber = (min, max) => {
  const randomBuffer = new Uint32Array(1)
  crypto.getRandomValues(randomBuffer)
  const randomNumber = randomBuffer[0] / (0xFFFFFFFF + 1)
  return Math.floor(randomNumber * (max - min + 1)) + min
}

const runGame = () => {
  const userName = greetUser()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  const minNumber = 1
  const maxNumber = 100
  const roundsCount = 3

  for (let i = 0; i < roundsCount; i++) {
    const randomNumber = getRandomNumber(minNumber, maxNumber)
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'

    console.log(`Question: ${randomNumber}`)
    const answer = readlineSync.question('Your answer: ')
    if (answer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}
runGame()
