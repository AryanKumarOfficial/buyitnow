import nc from 'next-connect';
import dbConnect from '../../../backend/config/dbConnect';
import { getProducts, newProduct } from '../../../backend/controllers/productControllers'
// const handler = async (req, res) => {
//     await dbConnect();
//     newProduct(req, res);
// }

dbConnect();

const handler = nc()
handler.post(newProduct)
handler.get(getProducts)

export default handler;
