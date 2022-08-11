import db from "../config/database.js";
import { v4 } from "uuid";
export const departmentController = async (req, res) => {
  const data = req.body;
  const id = v4();

  db.query(
    `INSERT INTO department (id, name, parent_department) VALUES (?,?,?)`,
    [id, data.name, data.parent_department],
    (err) => {
      console.log(err);
      if (err)
        return res
          .status(500)
          .send({ message: "Cannot create department" });
      return res.status(200).send({ message: "department created" });
    }
  );
};

export const readDepartment = async (req, res) => {
  db.query("SELECT * FROM department", (err, results) => {
    console.log(results);
    if (err) return res.status(400).send({ message: "department not found" });
    return res.status(200).send(results);
  });
};

export const readDepartmentId = async (req, res) => {
  const id = req.params["departmentId"];
  db.query("SELECT * FROM department WHERE id=?", [id], (err, results) => {
    console.log(results);
    if (err) return res.status(400).send({ message: "Cannot read department"});
    return res.status(200).send(results);
  });
};

export const updateDepartmentId = async (req, res) => {
  const data = req.body;
  const id = req.params["departmentId"];
  db.query(
    "UPDATE department SET name=? WHERE id=?",
    [data.name, id],
    (err, results) => {
      console.log(results);
      if (err)
        return res
          .status(400)
          .send({ message: "unable to update" });
      return res.status(200).send({ message: "update sucessfully" });
    }
  );
};

export const deleteDepartmentId = async (req, res) => {
  const id = req.params["departmentId"];
  db.query("DELETE FROM department WHERE id=?", [id], (err, results) => {
    console.log(results);
    if (err) return res.status(400).send({message: "Cannot delete"});
    return res.status(200).send({ message: "delete successfully" });
  });
};
