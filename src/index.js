import readlineSync from 'readline-sync'
import greetUser from './cli.js'

const startGame = (description, generateQuestion, getCorrectAnswer) => {
  const userName = greetUser()
  console.log(description)

  const roundsCount = 3
  for (let i = 0; i < roundsCount; i++) {
    const question = generateQuestion()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')
    const correctAnswer = getCorrectAnswer(question)
    if (String(userAnswer) === String(correctAnswer)) {
      console.log('Correct!')
    }
    else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
      )
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}

export default startGame
