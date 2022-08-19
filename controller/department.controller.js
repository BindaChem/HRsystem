import db from "../config/connection.js";
import {v4} from "uuid";
export const departmentController = (req, res) => {
    const data = req.body;
    const id = v4();

    db.query(
        `INSERT INTO department (id, depname, parent_department) VALUES (?,?,?)`, [
        id,
        data.depname,
        data.parent_department,
    ],
        (err) => {
            console.log(err);
            if (err) return res.status(500).send(err);
            return res.status(400).send({ message: "department created" });
        }
    );

};

export const readDepartment = (req, res) =>{
    db.query("SELECT * FROM department", (err, results) => {
        console.log(results);
        if(err) return res.status(400).send(err);
        return res.status(200).send(results);
    });
};

export const readDepartment1 = (req, res) => {
    const id = req.params["departmentId"]
    db.query("SELECT * FROM department WHERE id=?",[id], (err, results) => {
        console.log(results);
        if(err) return res.status(400).send(err);
        return res.status(200).send(results);
    });
};

export const updateDepartment = (req, res) => {
    const data = req.body;
    const id = req.params["departmentId"]  
    db.query("UPDATE department SET depname=? WHERE id=?", [data.depname, id], 
    (err, results) => {
        console.log(results);
        if(err) return res.status(400).send(err);
        return res.status(200).send({message: "update sucessfully"});
    });
};

export const deleteDepartment = (req, res) => {
    const id = req.params["department"]
    db.query("DELETE FROM department WHERE id=?", [id], (err, results) => {
        console.log(results);
        if (err) return res.status(400).send(err);
        return res.status(200).send({message: "delete successfully"});
    }); 
};

