import db from "../config/connection.js";
export const validateDepartment = (req, res, next) => {
    const data = req.body;

    if (!data?.depname || data?.parent_department === undefined)
        return res.status(400).send({ message: "both depname and parent_department fields are required" });
        return next();
    
};



