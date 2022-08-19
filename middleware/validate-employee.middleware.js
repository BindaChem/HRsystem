import db from "../config/connection.js";
export const validateEmployee = (req, res, next) => {
    const data = req.body;
    if (!data?.first_name || 
        !data?.last_name || 
        !data?.address || 
        !data?.contact || 
        !data?.email || 
        !data?.salary || 
        !data?.join_date ||
        !data?.designation
        )
        return res.status(200).send({ message: "all fields are required" });
    return next();
};