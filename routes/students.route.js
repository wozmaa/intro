const { Router } = require("express");

const { studentsController } = require('../controllers/students.controller');

const router = Router();

router.get('/students', studentsController.getStudent);
router.post('/students', studentsController.postStudent);
router.delete('/students/:id', studentsController.deleteStudentById);
router.patch('/students/:id', studentsController.patchStudentById);

module.exports = router;