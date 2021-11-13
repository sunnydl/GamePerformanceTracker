import express, { Router } from 'express'
import * as summonerController from '../../controllers/summonerController'
const router: Router = express.Router()

router.get('/', summonerController.getSummonerInfoByName);
router.get('/leaderBoard', summonerController.getLeaderBoard);

export default router;
