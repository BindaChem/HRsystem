import db from "../config/database.js";
export const validateRegister = (req, res, next) => {
    const data = req.body;
    if (!data?.first_name || !data?.last_name || !data?.email || !data?.password || !data?.role_Id)
        return res.status(400).send({ message: "all fields are required" });
    db.query("SELECT * FROM user WHERE email = ?", [data.email], (err, row) => {
        if (err) return res.status(500).send(err);
        if (row.length !== 0)
            return res.status(400).send({ message: "user with this email already exist." });

        return next();
    })
};