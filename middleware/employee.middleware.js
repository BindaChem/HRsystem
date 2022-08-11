import db from "../config/database.js";

export const validateEmployeeMiddleware = (req, res, next) => {
  const data = req.body;
  if (
    !data?.first_name ||
    !data?.last_name ||
    !data?.email ||
    !data?.phone_number ||
    !data?.address ||
    !data?.salary ||
    !data?.join_date ||
    !data?.designationId 
   
  )
    return res.status(400).send({ message: "all fields are required" });
  return next();
};


