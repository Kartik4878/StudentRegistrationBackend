const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/student-registration")
    .then(() => { console.log("Connection Successful") })
    .catch((error) => { console.log(error) });



