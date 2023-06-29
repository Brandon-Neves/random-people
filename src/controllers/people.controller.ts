import peopleServices from '../services/people.services'
import { Response, Request } from 'express'

async function getPeople(req: Request, res: Response) {
  try {
    const randomPeople = await peopleServices.randomPerson()
    res.send(randomPeople)
  } catch (error) {
    res.sendStatus(500)
  }
}

const peopleController = { getPeople }
export default peopleController
