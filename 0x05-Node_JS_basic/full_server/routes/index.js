// Linking routes to AppController and StudentsController
import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = express.Router();

// Route for the homepage
router.get('/', AppController.getHomepage);

// Route for all students
router.get('/students', StudentsController.getAllStudents);

// Route for students by major
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
