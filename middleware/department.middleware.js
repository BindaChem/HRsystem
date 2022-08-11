import db from "../config/database.js";


export const validateDepartment = (req, res, next) => {
    const data = req.body;

    if (!data?.name || data?.parent_department === undefined)
        return res.status(400).send({ message: "both name and parent_department fields are required" });
        return next();
    
};