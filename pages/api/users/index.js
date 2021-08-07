import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

dbConnect();

export default async (req, res) => {
    const { method } = req;
    

    switch (method) {
        case "GET":
            try {
                const users = await User.find({});
                res.status(200).json({ success: true, data: users });
            } catch (error) {
                res.status(400).json({ success: false, error });
            }
            break;
        case "POST":
            try {
                const newUser = new User(req.body);
                const userSave = await newUser.save();

                res.status(200).json({ success: true, data: userSave });
            } catch (error) {
                res.status(400).json({ success: false, error });
            }
            break;

        default:
            res.status(400).json({ success: false, error });
            break;
    }
};
