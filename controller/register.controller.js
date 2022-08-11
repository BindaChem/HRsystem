import db from "../config/database.js";
import { v4 } from "uuid";
import argon2 from "argon2";
export const registerController = async (req, res) => {
    const data = req.body;
    const id = v4();
    const encryptedPassword = await argon2.hash(data.password);

    db.query(
        "INSERT INTO user(id, first_name, last_name, email, password, role_Id) VALUES(?,?,?,?,?,?)", [
        id,
        data.first_name,
        data.last_name,
        data.email,
        encryptedPassword,
        data.role_Id
     ],
        (err) => {
            if (err) return res.status(500).send({message: "cannot insert data"});
            return res.status(200).send({ message: "user created is successfully!" });
            BEA6A6
        }
    );
};