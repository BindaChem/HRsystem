import db from "../config/database.js";
import { v4 } from "uuid";

export const createEmployeeController = (req, res) => {
  const data = req.body;
  const id = v4();

  db.query(
    "INSERT INTO employee (id,first_name,last_name,email,phone_number,address,salary,join_date,designationId,departmentId,userId) VALUES (?,?,?,?,?,?,?,?,?,?,?) ",
    [
      id,
      data.first_name,
      data.last_name,
      data.email,
      data.phone_number,
      data.address,
      data.salary,
      data.join_date,
      data.designationId,
      data.departmentId,
      data.userId,
    ],
    (err, results) => {
      console.log(err, results);
      if (err) return res.status(500).send({mesage : "Unable to create employee"});
      return res.status(200).send({ message: "employee created successfully" });
    }
  );
};

export const readEmployee = (req, res) => {
  db.query("SELECT * FROM employee", (err, results) => {
    console.log(results);
    if (err) return res.status(500).send({message: "Invalid syntax"});
    return res.status(200).send(results);
  });
};

export const readEmployeeId = (req, res) => {
  const id = req.params["employeeId"];
  db.query("SELECT * FROM employee WHERE id = ?", [id], (err, results) => {
    console.log(results);
    if (err) return res.status(500).send({message: "Invalid syntax"});
    return res.status(200).send({ results });
  });
};

export const updateEmployeeId = (req, res) => {
  const data = req.body;
  const id = req.params["employeeId"];
  console.log(id);

  db.query(
    "UPDATE employee SET email =?,phone_number =?,address =?,salary =? WHERE id= ?",
    [data.email, data.phone_number, data.address, data.salary, id],
    (err, results) => {
      if (err) return res.status(500).send({message: "Unable to update"});
      return res.status(200).send({ message: "updated successfully" });
    }
  );
};

export const deleteEmployeeId = (req, res) => {
  const id = req.params["employeeId"];
  db.query("DELETE FROM employee WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).send({message: "Unable to delete"});
    return res.status(200).send({ message: "deleted successfully" });
  });
};




