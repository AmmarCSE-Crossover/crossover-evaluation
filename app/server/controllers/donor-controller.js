import http from 'http';
import { add, findWithinPolygon } from '../../data/donor-agent'
import { notifyAddDonor } from '../socket.io/server.io'
import uuid from 'node-uuid'

export function GetDonors(req, res, next) {
    const {
        xmin,
        xmax,
        ymin,
        ymax
    } = req.query
        //sigh, coordinates in the mapping world are wierd
        //initially, I thought the x was y and y was x coming from the arcgis extent
        //apparently, it 'depends'
        //http://gis.stackexchange.com/questions/11626/does-y-mean-latitude-and-x-mean-longitude-in-every-gis-software
    const coordinates = [
        [
            [ymin, xmax],
            [ymin, xmin],
            [ymax, xmin],
            [ymax, xmax],
            [ymin, xmax]
        ]
    ]

    findWithinPolygon(coordinates, (err, donors) => {
        if (err) {
            res.json({
                status: false,
                error: err.message
            })
        } else {
            res.json({
                status: true,
                donors
            })
        }
    })
}

export function PostDonor(req, res, next) {
    let donor = req.body
    donor.ip = req.ip
    donor.coordinates = [donor.longitude, donor.latitude]
    donor.editToken = uuid.v1()

    add(donor, (err, donor) => {
        if (err) {
            res.json({
                status: false,
                error: err.message
            })
        } else {
            delete donor._id
            res.json({
                status: true,
                donor
            })
            delete donor.editToken
            notifyAddDonor(donor)
        }
    })
}
