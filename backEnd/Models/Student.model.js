// create Student schema using mongoose
// 1. Student.model.js : Schema for student (id,firstname,lastName,group) + create the collection 

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({

    id : Number,
    firstName: String,
    lastName: String,
    group: String

});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;

