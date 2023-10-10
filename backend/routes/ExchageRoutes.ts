import express from 'express';
import  ExchangeContoller from '../controllers/ExchangeController'
const router = express.Router();

router.get("/", ExchangeContoller.getAll);
router.post('/', ExchangeContoller.createExchange);
router.delete('/', ExchangeContoller.deleteExchange);
export default router;