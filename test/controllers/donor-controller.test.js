import sinon from 'sinon'
import chai from 'chai'
import {GetDonors} from '../../app/server/controllers/donor-controller'
import { findWithinPolygon } from '../../app/data/donor-agent'

let expect = chai.expect

describe("Routes", () => {
  describe("GET Donors", () => {
      it("should respond", () => {
        let fwpStub = sinon.stub().returns({
                status: true,
                donors
            })

        let req,res,spy

        req = res = {}
        spy = res.json = sinon.spy()

        GetDonors(req, res)
        expect(spy.calledOnce).to.equal(true)
      })     
  })
})
