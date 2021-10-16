import express, { Router } from 'express'
import summonerRoutes from './summoner/summonerInfoRoutes'
import matchesRoutes from './match/matchRoutes'

const router: Router = express.Router()

router.use('/summonerInfo', summonerRoutes);
router.use('/matches', matchesRoutes);

export default router;
