import db from "../config/connection.js";
import {v4} from "uuid";
export const employeeController = async (req, res) => {
    const data = req.body
    const id = v4();

    db.query(
        "INSERT INTO employee (id, first_name, last_name, address, contact, email, salary, join_date, designation, depid, uid) VALUES (?,?,?,?,?,?,?,?,?,?,?)", [
            id,
            data.first_name,
            data.last_name,
            data.address,
            data.contact,
            data.email,
            data.salary,
            data.join_date,
            data.designation,
            data.depid,
            data.uid,

        ],
        (err, results) => {
            console.log(err, results);
            if (err) return res.status(400).send(err);
            return res.status(200).send({message: "employee is create"});
        }
    );
};

export const readEmployee = async (req, res) => {
    db.query("SELECT * FROM employee", (err, results) => {
        console.log(results);
        if(err) return res.status(400).send(err);
        return res.status(200).send(results);
    });
};

export const readEmployee1 = async (req, res) => {
    const id = req.params["employeeId"]
    db.query("SELECT * FROM employee WHERE id=?",[id], (err, results) => {
        console.log(results);
        if(err) return res.status(400).send(err);
        return res.status(200).send(results);
    });
};

export const updateEmployee = async (req, res) => {
    const data = req.body;
    const id = req.params["employeeId"]
    db.query("UPDATE employee SET address=?, contact=?, email=?, salary=?, join_date=? WHERE id=?", [
        data.address,
        data.contact,
        data.email,
        data.salary,
        data.join_date,
        id

    ],
    (err, results) => {
        console.log(results);
        if (err) return res.status(400).send(err);
        return res.status(200).send({message: "update successfully"});
    }
    );
};

export const deleteEmployee = async (req, res) => {
    const id = req.params["employeeId"]
    db.query("DELETE FROM employee WHERE id=?", [id], (err, results) => {
        console.log(results);
        if (err) return res.status(400).send(err);
        return res.status(200).send({message: "delete successfully"});
    }); 
};
