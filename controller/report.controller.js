import db from "../config/connection.js";

export const recordRepo = (req, res) => {
    const id = req.params ["employeeId"];
    const from=req.body["from_date"];
    const to=req.body["to_date"];
    
    console.log(id);
    db.query("select * from (select date as date, empid as emp,description as des,     status as status,'absent' as checkin, 'absent' as checkout from leaves      union select date as date,empid as emp,'n/a' as des,'present' as status,check_in as checkin, check_out as checkout from attendance ) as o where emp=? and date>=? and date <=?  order by o.date asc;", [id,from,to], (err, results) => {
        console.log(results);
        if (err) return res.status(400).send(err);
        return res.status(200).send(results);
    }
    );
};
