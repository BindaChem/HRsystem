import {v4} from "uuid";
import db from "../config/connection.js";


export const checkInAllAttendance = (req, res) => {
    const data = req.body;
    const id = v4();

    db.query(
        `INSERT INTO attendance(id, date, check_in, check_out, empid) VALUES (?,?,?,?,?)`, [
            id,
            data.date,
            data.check_in,
            data.check_out,
            data.empid,
        ],
        (err) => {
            console.log(err);
            if (err) return res.status(400).send(err);
            return res.status(200).send({message: "attendance is done"});
        }
    );
    
};

export const readAllAttendance = (req, res) => {
   db.query(
    `SELECT * FROM attendance`, (err, results) =>{
        console.log(results);
        if (err) return res.status(401).send(err);
        return res.status(202).send(results);
    }
   ); 
};

export const readAttendance = (req, res) => {
    const id = req.params ["employeeId"]
    db.query("SELECT * FROM attendance WHERE id=?", [id], (err, results) => {
        console.log(results);
        if (err) return res.status(400).send(err);
        return res.status(200).send(results);
    }
    );
};

export const checkOutAttendance = (req, res) => {
    const data = req.body;
    const id = req.params ["attendanceId"]
    db.query ("UPDATE attendance SET check_out=? WHERE id=?", [data.check_out, id], (err, results) => {
        console.log(results);
        if (err) return res.status(400).send(err);
        return res.status(200).send({message: "check out successfully"});
    }
    );
};
