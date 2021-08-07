import User from "../../models/User";
import dbConnect from "../../lib/dbConnect";

dbConnect();


export default async (req, res) => {
    console.log(req.query);
    const data = await User.aggregate([
        {
            $search: {
                index: 'nextjs-crud-users',
                search: {
                    query: req.query.term,
                    path: ['nombre','apellido','telefono']
                }
            }
        }
    ])
    console.log(data);
    res.status(200).json(data)
}