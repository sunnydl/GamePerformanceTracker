import express, { Router } from 'express'
import * as matchController from '../../controllers/matchController'
const router: Router = express.Router()

router.get('/', matchController.getMatchHistory);

export default router;
