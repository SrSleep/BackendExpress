import User from "../../models/User.js";

let allUser = async (req, res) => {
    try {
        let all = await User.find()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let userByRole = async (req, res) => {
    try {
        let role = req.params.id
        let all = await User.find({role:role})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}
export {allUser, userByRole}