import express from 'express'
import peopleRoutes from 'routes/people.routes'

import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
app.use(peopleRoutes)

app.listen(5000, () => console.log('Server is running'))
