const mongoose = require("mongoose");

const studentschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true
    },
    address: {
        type: String,
        minlength: 10
    }
});

const Student = new mongoose.model("Student", studentschema);

module.exports = Student;