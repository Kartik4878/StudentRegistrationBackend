const express = require("express");
require("../DB/DBConn");
const Student = require("../Models/Student");



const router = new express.Router();


router.get("/student", async (req, res) => {
    try {
        const allStudents = await Student.find();
        res.status(200).send(allStudents);
    } catch (error) {
        res.status(400).send(error);
    }

})
router.get("/student/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const allStudents = await Student.find({ _id: id });
        res.status(200).send(allStudents);
    } catch (error) {
        res.status(400).send(error);
    }

})

router.post("/student", async (req, res) => {
    const newStudent = new Student(req.body);
    try {
        await newStudent.save();
        res.status(200).send({ "message": "New record created successfully." })
    } catch (error) {
        res.status(400).send(error);
    }
})

router.delete("/student/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const student = await Student.findByIdAndDelete(id);
        res.status(200).send(student);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.patch("/student/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).send(updateStudent);
    } catch (error) {
        res.status(404).send();
    }
})


module.exports = router;

