#!/usr/bin/env node

import readlineSync from 'readline-sync'
import greetUser from '../src/cli.js'

// Вспомогательная функция: возвращает случайное число в диапазоне [0, 1) через crypto
const getRandom01 = () => {
  const buffer = new Uint32Array(1)
  crypto.getRandomValues(buffer)
  return buffer[0] / (0xffffffff + 1) // [0, 1)
}

// Генерация случайного числа в диапазоне [min, max]
const getRandomNumber = (min, max) => {
  const r = getRandom01()
  return Math.floor(r * (max - min + 1)) + min
}

// Генерация случайного знака из списка
const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  const r = getRandom01()
  const index = Math.floor(r * operators.length)
  return operators[index]
}

const runGame = () => {
  const userName = greetUser()
  console.log('What is the result of the expression?')

  const minNumber = 0
  const maxNumber = 100
  const roundsCount = 3

  for (let i = 0; i < roundsCount; i++) {
    const firstRandomNumber = getRandomNumber(minNumber, maxNumber)
    const secondRandomNumber = getRandomNumber(minNumber, maxNumber)
    const randomOperator = getRandomOperator()
    let correctResult
    switch (randomOperator) {
      case '+':
        correctResult = firstRandomNumber + secondRandomNumber
        break
      case '-':
        correctResult = firstRandomNumber - secondRandomNumber
        break
      case '*':
        correctResult = firstRandomNumber * secondRandomNumber
        break
      default:
        correctResult = 0
    }

    console.log(
      `Question: ${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`,
    )
    const answer = readlineSync.question('Your answer: ')
    if (Number(answer) === correctResult) {
      console.log('Correct!')
    }
    else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctResult}'.\nLet's try again, ${userName}!`,
      )
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}
runGame()
