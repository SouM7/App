//routers
// 1. StudentsRouter.js : routes for students
const express = require('express');
const router = express.Router();
const StudentsController = require('../Controllers/Students.controller');

//router.get('/students', StudentsController.getAllStudents);
//router.get('/:id', StudentsController.getSingleStudent);
//router.post('/student', StudentsController.createStudent);
//router.put('/:guid',StudentsController.updateStudent);
// router.put('/:id', StudentsController.editStudent);
//router.delete('/:id', StudentsController.deleteStudents);

module.exports = router;

