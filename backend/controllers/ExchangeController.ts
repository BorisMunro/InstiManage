import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import Exchange from '../models/Exchanges';

export const getAll = asyncHandler(async (req: Request, res: Response) => {

    const exchanges = await Exchange.find({})//.select('-password');
    res.status(201).json({ success: true, count: exchanges.length, exchanges });

})
export const createExchange = asyncHandler(async (req: Request, res: Response) => {


    const { exchanger, exchangerMember, openDate,closeDate, lastModifiedDate, accountBallance, status } = req.body;
    console.log(exchanger, exchangerMember, openDate, closeDate, lastModifiedDate, accountBallance, status)
    const exchange = new Exchange({
        exchanger, exchangerMember, openDate,closeDate, lastModifiedDate, accountBallance, status
    });

    await exchange.save();

    
    const exchanges = await Exchange.find({})//.select('-password');

    res.status(201).json({ success: true, count: exchanges.length, exchanges });

})

export const deleteExchange = asyncHandler(async (req: Request, res: Response) => {

    console.log(req.body.id)
    const result =await Exchange.findByIdAndDelete(req.body.id);
    console.log(result)
    const exchanges = await Exchange.find({})//.select('-password');

    res.status(201).json({ success: true, count: exchanges.length, exchanges });

})


export default { getAll, createExchange , deleteExchange};
