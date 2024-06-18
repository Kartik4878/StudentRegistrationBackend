const express = require("express");
const cors = require("cors");
const StudentRouter = require("./Router/StudentRouter");



const app = express();
app.use(express.json());
app.use(cors());
app.use(StudentRouter);

app.listen(4001, () => { console.log("Listening on 4001") })