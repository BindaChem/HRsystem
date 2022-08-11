import db from "../config/database.js";
import { v4 } from "uuid";

export const add_In_Leave = (req, res) => {
  const data = req.body;
  const id = v4();

  db.query(
    "INSERT INTO in_Leave(id,date,description,status,emp_Id) VALUES (?,?,?,?,?)",
    [id, data.date, data.description, data.status, data.emp_Id],
    (err) => {
      console.log(err);
      if (err)
        return res.status(500).send({ message: "Unable to ask for  Leave" });
      return res.status(200).send({ message: "leave is  done" });
    }
  );
};

export const read_In_Leave = (req, res) => {
  db.query("SELECT * FROM in_Leave", (err, results) => {
    console.log(results);
    if (err)
      return res.status(500).send({ message: "unable to read for Leave" });
    return res.status(200).send(results);
  });
};

export const read_in_leave_by_id = (req, res) => {
  const id = req.params["in_LeaveId"];
  db.query("SELECT * FROM in_Leave WHERE id = ?", [id], (err, results) => {
    console.log(results);
    if (err)
      return res.status(500).send({ message: "Unable to read leave by Id" });
    return res.status(200).send({ results });
  });
};

export const update_In_Leave = (req, res) => {
  const data = req.body;
  const id = req.params["in_LeaveId"];
  db.query(
    "UPDATE in_Leave SET status=? WHERE id=?",
    [data.status, id],
    (err, results) => {
      console.log(results);
      if (err) return res.status(400).send({ message: "Unable to update" });
      return res.status(200).send({ message: "updated successfully" });
    }
  );
};
