import express from 'express'
import { GetReact, GetBundle } from '../controllers/react-controller'

export function routeApi(app){
    let apiRoutes = express.Router()

	apiRoutes.get('/', GetReact);
	apiRoutes.get('/bundle.js', GetBundle);

    app.use('/', apiRoutes)
}
