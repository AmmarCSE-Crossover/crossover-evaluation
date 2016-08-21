//centralize app initialization for both serving and testing

import express from 'express'
import {routeApi} from './server/middleware/router'
import mongoose from 'mongoose'
import {config} from './config'
import bodyParser from 'body-parser'
import {initSocketIO} from './server/socket.io/server.io'

export let app = express()

export function init(testing = false){
    app.enable('trust proxy')

    app.use(express.static('assets'))

    app.use( bodyParser.json() );       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
      extended: true
    })); 

    routeApi(app)

    mongoose.connect(config.test_db)
    mongoose.connection.on('connected', function () {
      console.log('Mongoose default connection open to ' + config.db)
    })

    //if were test, there is no need to listen
    if(!testing){
        let appServer = app.listen(config.test_port);

        initSocketIO(appServer)

        console.log("App listening on port "+config.test_port);
    }
}
