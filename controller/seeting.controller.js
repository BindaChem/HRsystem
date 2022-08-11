import { v4 } from "uuid";
import db from "../config/database.js";

export const insertIntoSeetings = (req, res) => {
  const data = req.body;
  const id = v4();
  db.query(
    "INSERT INTO seetings(id,seetings_name,seetings_value) VALUES (?,?,?)",
    [id, data.seetings_name, data.seetings_value],
    (err) => {
      console.log(err);
      if (err)
        return res.status(400).send({ message: "Unable insert into seetings" });
      return res.status(200).send({ message: "Inserted into seetings" });
    }
  );
};



export const readSeetings = (req, res) => {
  db.query("SELECT * FROM seetings", (err, results) => {
    console.log(results);
    if (err) return res.status(400).send({ message: "seetings not matchecd" });
    return res.status(200).send(results);
  });
};

export const readSeetingsId = (req, res) => {
  const id = req.params["seetingsId"];
  db.query("SELECT * FROM seetings WHERE id =?", [id], (err, results) => {
    console.log(results);
    if (err)
      return res.status(400).send({ message: "check for the correct syntax" });
    return res.status(200).send(results);
  });
};

export const updateSeetings = (req, res) => {
  const data = req.body;
  const id = req.params["seetingsId"];
  console.log(id);

  db.query(
    "UPDATE seetings SET seetings_value = ? WHERE id= ?",
    [data.seetings_value, id],
    (err, results) => {
      if (err)
        return res
          .status(400)
          .send({ message: "check for the correct syntax" });
      return res.status(200).send({ message: "updated seetings successfully" });
    }
  );
};

export const deleteSeetingsId = async (req, res) => {
  const id = req.params["seetingsId"];
  db.query("DELETE FROM seetings WHERE id=?", [id], (err, results) => {
    console.log(results);
    if (err) return res.status(400).send({ message: "Cannot delete" });
    return res.status(200).send({ message: "delete successfully" });
  });
};
