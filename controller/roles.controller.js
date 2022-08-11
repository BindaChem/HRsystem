import { v4 } from "uuid";
import db from "../config/database.js";

export const insertRoles = (req, res) => {
  const data = req.body;
  const id = v4();
  db.query(
    "INSERT INTO roles(id,name) VALUES (?,?)",
    [id, data.name],
    (err) => {
      console.log(err);
      if (err) return res.status(500).send({ message: "Enter the validate data."});
      return res.status(200).send({ message: "roles inserted" });
    }
  );
};



export const readRoles = (req, res) => {
    db.query("SELECT * FROM roles", (err, results) => {
      console.log(results);
      if (err) return res.status(400).send({message: "Unable to read roles"});
      return res.status(200).send(results);
    });
  };
  
  
  
  export const readRolesId = (req, res) => {
      const id = req.params["rolesId"];
    db.query("SELECT * FROM roles WHERE id =?",[id], (err, results) => {
      console.log(results);
      if (err) return res.status(400).send({message: "Unable to read roles by id"});
      return res.status(200).send(results);
    });
  };

  export const updateRoles = (req, res) => {
    const data = req.body;
    const id = req.params["rolesId"];
    console.log(id);
  
    db.query(
      "UPDATE roles SET name =? WHERE id=?",
      [data.name,id],
      (err, results) => {
        if (err) return res.status(500).send({message: "Unable to update"});
        return res
          .status(200)
          .send({message: "updated roles successfully"});
      }
    );
  };
  
  
  export const deleteRolesId = async (req, res) => {
    const id = req.params["rolesId"];
    db.query("DELETE FROM roles WHERE id=?", [id], (err, results) => {
      console.log(results);
      if (err) return res.status(400).send({message: "Unable to delete"});
      return res.status(200).send({ message: "delete successfully" });
    });
  };
  