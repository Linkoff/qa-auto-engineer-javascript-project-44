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

export { getRandomNumber, getRandomOperator }
