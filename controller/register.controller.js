import db from "../config/connection.js";
import { v4 } from "uuid";
import argon2 from "argon2";
export const registerController = async (req, res) => {
    const data = req.body;
    const id = v4();
    const encryptedPassword = await argon2.hash(data.password);

    db.query(
        "INSERT INTO user(id, username, email, password, roleid) VALUES(?,?,?,?,?)", [
        id,
        data.username,
        data.email,
        encryptedPassword,
        data.roleid,
    ],
        (err) => {
            if (err) return res.status(500).send(err);
            return res.status(400).send({ message: "user created is successfully!" });

        }
    );
};