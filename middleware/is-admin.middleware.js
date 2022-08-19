import jwt from "jsonwebtoken";
export const isAdminMiddleware = (req, res, next) => {
   const token = req.headers.access_token;
   if (!token) return res.status(400).send({message: "unauthorized"});
   try{
    const decode = jwt.decode(token);
    if(decode.role !== "admin")
    return res.status(400).send({message: "not an admin."});
    return next();
   } catch (err) {
    console.log(err);
    res.status(400).send(err);
   }
}