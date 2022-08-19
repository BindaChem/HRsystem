import db from "../config/connection.js";
export const validateRegister = (req, res, next) => {
    const data = req.body;
    if (!data?.username || !data?.email || !data?.password || !data?.roleid)
        return res.status(400).send({ message: "all fields are required" });
    db.query("SELECT * FROM user WHERE email = ?", [data.email], (err, row) => {
        if (err) return res.status(500).send(err);
        if (row.length !== 0)
            return res.status(400).send({ message: "user with this email already exist." });

        return next();
    })
};