// 1. StudentsController.js : CRUD for students
// const StudentController={}
// module.exports = StudentController;




const Student = require("../Models/Student.model");
const StudentsController = {};


StudentsController.createStudent = async function (req, res) {
  const student = new Student({
    id : req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    group: req.body.group
  });
  try {
    await student.save();
    res.status(201).json({
      message: "Student created successfully",
      student,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured while creating student",
      error,
    });
  }
};


StudentsController.getAllStudents = async function (req, res) {
  console.log("GET /students");
  let actors;
  try {
    actors = await Student.find();
    res.send(studentss);
  } catch (error) {
    res.status(500).send(error);
  }
};

StudentsController.getSingleStudent= async function (req, res) {
  console.log("GET /students/:id");
  let student;
  try {
    student = await Student.findById(req.params.id);
    res.send(actor);
    if(student){
      res.send(student);
    } else {
      console.log("student not found")
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

StudentsController.updateStudent = async function(req,res){
  console.log("PUT/ students/:guid");
  let student;
  try {
    student = await Student.findOneAndUpdate(
      {id : req.params.id},
      {$set: req.body},
      {new : true}
    );
    if (student){
      res.send(student);
    }
    else{
      res.status(404).send("Student not found");
    }
  }
    catch (error) {
      res.status(500).send(error);
    }
}

StudentsController.deleteStudents = async function(req,res){
  console.log("DELETE/ students/:guid");
  let actor;
  try {
    student = await Student.findOneAndDelete({id : req.params.id});
    if (student){
      res.send(student);
    }
    else{
      res.status(404).send("Student not found");
    }
  }
    catch (error) {
      res.status(500).send(error);
    }
}
  

module.exports = StudentsController;
