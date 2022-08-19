import express from "express";
import authrouter from "./routes/auth.routes.js"
import { validateTokenMiddleware } from "./middleware/jwt.middleware.js";
import { isAdminMiddleware } from "./middleware/is-admin.middleware.js";
import userRouter from "./routes/userRoutes.js";
import departmentRouter from "./routes/department.routes.js";
import employeeRouter from "./routes/employee.routes.js";
import attendanceRouter from "./routes/attendance.routes.js";
import leavesRouter from "./routes/leaves.routes.js";
import settingRouter from "./routes/setting.routes.js";
import reportRouter from "./routes/report.routes.js";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import YAML from "yaml";

const swaggerSpec = fs.readFileSync('./swagger.yml', 'utf8');

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(YAML.parse(swaggerSpec)));


app.use("/user", userRouter);
app.use('/auth', authrouter);
app.use('/department', validateTokenMiddleware, isAdminMiddleware, departmentRouter);
app.use('/employee', employeeRouter);
app.use('/attendance', attendanceRouter);
app.use('/leaves', leavesRouter);
app.use('/setting', settingRouter);
app.use('/record', reportRouter);

app.listen(8000, () => {
    console.log("server is started");

});