import dbConnect from '../../../backend/config/dbConnect';
import { newProduct } from '../../../backend/controllers/productControllers'
const handler = async (req, res) => {
    await dbConnect();
    newProduct(req, res);
}



export default handler;
