import { type } from 'os'
import db from '../database/db'

type CountQuery = { count: number }

async function results(): Promise<number> {
  const { rows } = await db.query<CountQuery>(
    `SELECT COUNT (*):: integer from people;`
  )
  const people = rows[0].count
  return people
}

type PeopleResult = {
  id: number
  firstName: string
  lastName: string
}

async function getId(id: number): Promise<PeopleResult> {
  const { rows } = await db.query<PeopleResult>(
    `SELECT * FROM people WHERE id = $1;`,
    [id]
  )
  const people = rows[0]
  return people
}

const peopleRepositories = { results, getId }

export default peopleRepositories
