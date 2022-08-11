import { v4 } from "uuid";
import db from "../config/database.js";

export const checkInAttendence = (req, res) => {
  const data = req.body;
  const id = v4();
  db.query(
    "INSERT INTO attendence(id,date,check_in,check_out,emp_id) VALUES (?,?,?,?,?)",
    [id, data.date, data.check_in, data.check_out, data.emp_id],
    (err) => {
      console.log(err);
      if (err) return res.status (400).send({message: "Unable to do attendance"});
      return res.status(200).send({ message: "attendance done" });
    }
  );
};

export const readAttendence = (req, res) => {
  db.query("SELECT * FROM attendence", (err, results) => {
    console.log(results);
    if (err) return res.status(400).send({message: "attendence not matchecd"});
    return res.status(200).send(results);
  });
};


export const readAttendenceUid = (req, res) => {
    const id = req.params["attendenceId"];
  db.query("SELECT * FROM attendence WHERE id =?",[id], (err, results) => {
    console.log(results);
    if (err) return res.status(400).send({message: "check for the correct syntax"});
    return res.status(200).send(results);
  });
};



export const checkOutAttendence = (req, res) => {
  const data = req.body;
  const id = req.params["attendenceId"];
  console.log(id);

  db.query(
    "UPDATE attendence SET check_out = ? WHERE id= ?",
    [data.check_out,id],
    (err, results) => {
      if (err) return res.status(400).send({message: "check for the correct syntax"});
      return res
        .status(200)
        .send({ message: "updated attendence successfully" });
    }
  );
};
