import peopleRepositories from 'repositories/people.repositories'

function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min
}

async function randomPerson() {
  const countPerson = await peopleRepositories.results()

  if (!countPerson) {
    throw new Error('not count')
  }
  const randomId = randomNumber(1, countPerson)
  return await peopleRepositories.getId(randomId)
}

const peopleServices = { randomPerson }
export default peopleServices
