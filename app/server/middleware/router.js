import express from 'express'
import { GetReact, GetBundle, GetDonors, PostDonor } from '../controllers/react-controller'

export function routeApi(app){
    let apiRoutes = express.Router()

	apiRoutes.get('/', GetReact);
	apiRoutes.get('/bundle.js', GetBundle);

	apiRoutes.get('/donors', GetDonors);

	apiRoutes.post('/donor', PostDonor);

    app.use('/', apiRoutes)
}
