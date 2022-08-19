import { v4 } from "uuid";
import db from "../config/connection.js";

export const insertIntoSettings = (req, res) => {
  const data = req.body;
  const id = v4();
  db.query(
    "INSERT INTO settings(id,settings_name,settings_value) VALUES (?,?,?)",
    [id, data.settings_name, data.settings_value],
    (err) => {
      console.log(err);
      if (err)
        return res.status(400).send({ message: "Unable insert into settings" });
      return res.status(200).send({ message: "Inserted into settings" });
    }
  );
};



export const readSettings = (req, res) => {
  db.query("SELECT * FROM settings", (err, results) => {
    console.log(results);
    if (err) return res.status(400).send({ message: "settings not matchecd" });
    return res.status(200).send(results);
  });
};

export const readSettingsId = (req, res) => {
  const id = req.params["settingsId"];
  db.query("SELECT * FROM settings WHERE id =?", [id], (err, results) => {
    console.log(results);
    if (err)
      return res.status(400).send({ message: "check for the correct syntax" });
    return res.status(200).send(results);
  });
};

export const updateSettings = (req, res) => {
  const data = req.body;
  const id = req.params["settingsId"];
  console.log(id);

  db.query(
    "UPDATE settings SET settings_value = ? WHERE id= ?",
    [data.settings_value, id],
    (err, results) => {
      if (err)
        return res
          .status(400)
          .send({ message: "check for the correct syntax" });
      return res.status(200).send({ message: "updated settings successfully" });
    }
  );
};

export const deleteSettingsId = async (req, res) => {
  const id = req.params["settingsId"];
  db.query("DELETE FROM settings WHERE id=?", [id], (err, results) => {
    console.log(results);
    if (err) return res.status(400).send({ message: "Cannot delete" });
    return res.status(200).send({ message: "delete successfully" });
  });
};