import express, { Router } from 'express'
import summonerInfoRoutes from './summoner/summonerInfoRoutes'
import matchRoutes from './match/matchRoutes'

const router: Router = express.Router()

router.use('/summonerInfo', summonerInfoRoutes);
router.use('/match-history', matchRoutes);

export default router;
