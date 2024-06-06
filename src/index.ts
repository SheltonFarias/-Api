import express from 'express'
import { routes } from '@/routes/routes'
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from '@/services/swagger.json'

var cors = require('cors')

const app = express()

app.use(express.json());

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.use(cors({
	origin: '*',
	methods: 'GET, PUT, POST, DELETE'
}))

app.use(routes)

app.listen(3000, () => {
	console.log('Server on: http://localhost:3000 ON!')
})