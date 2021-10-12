import express, { Router } from 'express'

const router: Router = express.Router()

router.use('/summonerInfo', require('./summoner/summonerInfoRoutes').default(router));
router.use('/match-history', require('./match/matchRoutes').default(router));

export default router;
