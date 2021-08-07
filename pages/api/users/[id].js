import User from "../../../models/User";
import dbConnect from "../../../lib/dbConnect";

dbConnect();

export default async (req, res) => {
    const {
        method,
        query: { id },
    } = req;

    switch (method) {
        case "GET":
            try {
                const user = await User.findById(id);
                if (!user) {
                    return res
                        .status(400)
                        .json({ success: false, message: "User not found" });
                }
                res.status(200).json({ success: true, data: user });
            } catch (error) {
                res.status(400).json({ success: false, error });
            }

            break;

        case "PUT":
            try {
                const toChange = req.body;

                const updatedUser = await User.findByIdAndUpdate(id, toChange, {
                    new: true,
                    runValidators: true,
                });

                if (!updatedUser) {
                    return res
                        .status(400)
                        .json({ success: false, message: "User not found" });
                }

                res.status(200).json({ success: true, data: updatedUser });
            } catch (error) {
                res.status(400).json({ success: false, error });
            }

            break;

        case "DELETE":
            try {
                const deletedUser = await User.findByIdAndDelete(id);
                console.log(deletedUser);
                if (!deletedUser) {
                    return res
                        .status(400)
                        .json({ success: false, message: "User not found" });
                }

                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false, error });
            }

            break;

        default:
            res.status(400).json({
                success: false,
                message: "Invalid request",
            });

            break;
    }
};
