import db from "../config/database.js";
export const logOut = (req,res) => {
   const authHeader = req.headers.access_token;
   db.query(
      "INSERT INTO blacklisttoken VALUES(?)",[authHeader],(err,result) => {
         console.log(err);
         if (err) res.status(400).send({message: "cannot insert data."})
         res.status(200).send({message: `${authHeader}, is blacklisted`})
         
      }
   )
}