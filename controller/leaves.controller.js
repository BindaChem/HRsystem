import db from "../config/connection.js";
import {v4} from "uuid";

export const takeLeave = (req, res) => {
   const data = req.body;
   const id = v4();

   db.query( 
    `INSERT INTO leaves (id, date, description, status, empid) VALUES (?,?,?,?,?)`, [
        id,
        data.date,
        data.description,
        data.status,
        data.empid
    ],
    (err) => {
        console.log(err);
        if (err) return res.status(401).send(err);
        return res.status(200).send({message: "leaves is created"});
    }
   );

};

export const readLeaves = (req, res) => {
    db.query (
        "SELECT * FROM leaves" , (err, results) => {
            console.log(results);
            if (err) return res.status(400).send(err);
            return res.status(200).send(results);
        }
    );
};

export const readleaves1 = (req, res) => {
    const id = req.params ["leavesId"];
 
    db.query(
        "SELECT * FROM leaves WHERE id=?", [id], (err, results) => {
            console.log(results);
            if (err) return res.status(401).send(err);
            return res.status(200).send(results);
        }
    );
};

export const updateLeaves = (req, res) =>{
    const data = req.body;
    const id = req.params ["leavesId"];

    db.query(
        "UPDATE leaves SET status=? WHERE id=?", [
            data.status,
            id
        ], (err, results) => {
            console.log(results);
            if (err) return res.status(400).send(err);
            return res.status(200).send({message: "update successfully"});
        }
    );
};


