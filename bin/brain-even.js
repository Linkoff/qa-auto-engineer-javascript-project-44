#!/usr/bin/env node

import readlineSync from 'readline-sync'
import greetUser from '../src/cli.js'

const isEven = number => number % 2 === 0

const runGame = () => {
  const userName = greetUser()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  const minNumber = 1
  const maxNumber = 100
  const roundsCount = 3

  for (let i = 0; i < roundsCount; i++) {
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
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
