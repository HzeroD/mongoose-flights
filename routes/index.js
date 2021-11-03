import { Router } from 'express'
// import * as flightsCtrl from "../controllers/flights"
import * as flightsCtrl from '../controllers/flights.js'
const router = Router()

/* GET home page. */
router.get('/', flightsCtrl.index)


export { 
  router
}
