import jwt from 'jsonwebtoken';
import db from "../config/database.js";
export const createTokenMiddleware = (req, res, next) => {
    const data = req?.user;
    if (!data) return res.status(500).send({message: "payload is not defined"});
    const claims = {
        sub: req.user.id,
        email: req.user.email,
        role: req.user.role,
    };
    try{
        const token = jwt.sign(claims, "abcd", {
            expiresIn: "2h",
        });
        req.token = token;
        return next();
    }catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }

};

export const validateTokenMiddleware = (req, res, next) => {
    const headers = req.headers;
    const accessToken = headers.access_token;
    console.log(accessToken);
    if (!accessToken) return res.status(401).send({message: "unauthorized"});
    db.query(
        "SELECT token from blacklisttoken WHERE token = ?", [accessToken],
        (err,results) => {
            console.log(results)
            if (err) res.status(400).send(err);
            if (results.length === 0){
            try{
                jwt.verify(accessToken, "abcd", (err, decoded) => {
                    console.log(decoded);
                });
                req.user = accessToken
                return next();
                
            }catch (err) {
                res.status(401).send({message: "unauthorized", err});
            }
        }else{res.status(401).send({message: "unauthorized"});}
        }
    )   

};