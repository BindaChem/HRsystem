 import express from "express";
 import connection from "../config/connection.js";
const router = express.Router();

router.post("/add", (req, res) => {
    console.log(req.query);
    const {id, username, email, password, roleid} = req?.body;

    connection.query(`INSERT INTO user(id, username, email, password, roleid) VALUES ('${id}', '${username}', '${email}', '${password}', '${roleid}')`, 
    (err, results, fields) => {
        if(err) throw err;
        console.log(results);

        if (results.affectedRows === 1)
        res.status(200).json({success: true, message: "user added is successful"});
        else
        res.status(200).json({success:false, message: "unabale to inter user"});
    }
    );
});

export default router;
