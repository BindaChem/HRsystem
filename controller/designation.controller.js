import { v4 } from "uuid";
import db from "../config/database.js";

export const insertDesignation = (req, res) => {
  const data = req.body;
  const id = v4();
  db.query(
    "INSERT INTO designation(id,name) VALUES (?,?)",
    [id, data.name],
    (err) => {
      console.log(err);
      if (err) return res.status(500).send({message: "Cannot insert data"});
      return res.status(200).send({ message: "inserted designation" });
    }
  );
};

export const readDesignation = (req, res) => {
  db.query("SELECT * FROM designation", (err, results) => {
    console.log(results);
    if (err) return res.status(400).send({message: "Unable to read designation"});
    return res.status(200).send(results);
  });
};


export const readADesignationId = (req, res) => {
    const id = req.params["desingnationId"];
  db.query("SELECT * FROM designation WHERE id =?",[id], (err, results) => {
    console.log(results);
    if (err) return res.status(400).send({message: "Unable to read designation by id"});
    return res.status(200).send(results);
  });
};



export const updateDesignation = (req, res) => {
  const data = req.body;
  const id = req.params["designationId"];
  console.log(id);

  db.query(
    "UPDATE designation SET name =? WHERE id=?",
    [data.name,id],
    (err, results) => {
      if (err) return res.status(500).send({message:"Unable to upate"});
      return res
        .status(200)
        .send({message: "updated designation successfully"});
    }
  );
};


export const deleteDesignationId = async (req, res) => {
  const id = req.params["designationId"];
  db.query("DELETE FROM designation WHERE id=?", [id], (err, results) => {
    console.log(results);
    if (err) return res.status(400).send({message: "Cannot delete"});
    return res.status(200).send({ message: "delete successfully" });
  });
};



