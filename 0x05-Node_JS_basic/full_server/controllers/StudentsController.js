// StudentsController Class with two static methods
import { readDatabase } from '../utils';

export class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField = await readDatabase(req.app.locals.databasePath);

      let response = 'This is the list of our students\n';
      const fields = Object.keys(studentsByField)
        .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

      fields.forEach((field) => {
        const students = studentsByField[field];
        response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });

      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const studentsByField = await readDatabase(req.app.locals.databasePath);

      if (studentsByField[major]) {
        const students = studentsByField[major];
        return res.status(200).send(`List: ${students.join(', ')}`);
      }
      return res.status(500).send('Cannot load the database');
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
