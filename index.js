import express from "express";
import { router as authrouter} from "./routes/auth.routes.js";
import {router as attendenceRouter} from "./routes/attendence.routes.js";
// import { validateTokenMiddleware } from "./middleware/jwt.middleware.js";
import { isAdminMiddleware } from "./middleware/is-admin.middleware.js";
import {router as departmentRouter} from "./routes/department.routes.js";
import {router as employeeRouter} from "./routes/employee.routes.js";
import {router as inLeaveRouter} from "./routes/in_Leave.routes.js";
import {router as rolesRouter} from "./routes/roles.routes.js";
import {router as designationRouter} from "./routes/designation.routes.js";
import {router as seetingsRouter} from "./routes/seetings.routes.js";
const app = express();

app.use(express.json());

app.use('/auth', authrouter);
app.use('/department',isAdminMiddleware, departmentRouter);
app.use('/employee', employeeRouter);
app.use('/attendence',attendenceRouter);
app.use('/in_Leave', inLeaveRouter);
app.use('/roles',rolesRouter);
app.use('/designation',designationRouter);
app.use('/seetings',seetingsRouter);


app.listen(8081, () => {
    console.log("server is started on port 8081");

});



