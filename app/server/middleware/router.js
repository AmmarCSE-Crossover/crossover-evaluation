import express from 'express'
import { GetApp, GetBundle } from '../controllers/app-controller'
import {GetDonors, PostDonor } from '../controllers/donor-controller'

export function routeApi(app){
    let apiRoutes = express.Router()

	apiRoutes.get('/', GetApp);
	apiRoutes.get('/bundle.js', GetBundle);

	apiRoutes.get('/donors', GetDonors);

	apiRoutes.post('/donor', PostDonor);

    app.use('/', apiRoutes)
}
