import nc from 'next-connect';
import dbConnect from '../../../backend/config/dbConnect';
import { getProduct } from '../../../backend/controllers/productControllers'
dbConnect();

const handler = nc()
handler.get(getProduct)

export default handler;
