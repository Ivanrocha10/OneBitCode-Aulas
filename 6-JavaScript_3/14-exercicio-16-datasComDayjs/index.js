const dayjs = require('dayjs')

function birthday(date) {
  const birthday = dayjs(date)
  const today = dayjs()

  const ageInYears = today.diff(birthday, 'year')
  const nextBirthday = birthday.add(ageInYears + 1, 'year')
  const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1

  console.log(`Idade: ${ageInYears}`)
  console.log(`Proximo niver: ${nextBirthday.format('DD/MM/YY')}`)
  console.log(
    `Dias ate completar ${ageInYears + 1} anos: ${daysToNextBirthday} `
  )
}

birthday('2005-09-19')
