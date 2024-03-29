import express, { Router } from 'express';
import * as matchController from '../../controllers/matchController';
const router: Router = express.Router();

router.get('/', matchController.getMatchHistory);
router.get('/chart', matchController.getMatchChartData);
router.get('/updated-history', matchController.getUpdatedMatchHistoryData);

export default router;
