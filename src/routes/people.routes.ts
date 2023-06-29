import { Router } from 'express'
import peopleController from 'controllers/people.controller'

const peopleRoutes = Router()

peopleRoutes.get('/person', peopleController.getPeople)

export default peopleRoutes
