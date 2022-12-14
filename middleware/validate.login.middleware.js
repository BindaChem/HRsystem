import argon2 from "argon2";
import database from "../config/database.js";
export const validatelogin = (req, res, next) => {
    const data = req.body;
    if (!data.email || !data.password)
        return res
            .status(400)
            .send({ message: "email and password both are required" });

    database.query(
        "SELECT user.id id, user.email email,user.password password, roles.name role FROM user left join roles on user.role_Id = roles.id WHERE email = ?",
        [data.email],
        async (err, row) => {
            console.log("Roles Hello")
            console.log(row);
            if (err) return res.status(500).send({ message: "server error", err });
            if (row.length == 0)
                return res
                    .status(400)
                    .send({ message: "user does not exist with this email" });
            const comparePassword = await argon2.verify(row[0].password, data.password);
            if (!comparePassword)
                return res.status(400).send({ message: "login failed" });
            req.user = row[0];
            return next();
        }
    )

};