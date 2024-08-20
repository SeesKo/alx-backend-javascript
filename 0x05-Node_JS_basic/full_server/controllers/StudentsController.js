// StudentsController Class with two static methods
import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const { dbPath } = req.query; // Get the database path from query parameters

    if (!dbPath) {
      return res.status(400).send('Database path is required');
    }

    try {
      const studentsByField = await readDatabase(dbPath);
      let result = 'This is the list of our students\n';

      // Get fields and sort alphabetically (case insensitive)
      const sortedFields = Object.keys(studentsByField)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      // Build the result string
      sortedFields.forEach((field) => {
        const students = studentsByField[field];
        result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });

      return res.status(200).send(result.trim()); // Ensure to return the response
    } catch (error) {
      return res.status(500).send('Cannot load the database'); // Ensure to return the response
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.query; // Get the major from query parameters
    const validMajors = ['CS', 'SWE'];

    if (!validMajors.includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE'); // Ensure to return the response
    }

    const { dbPath } = req.query; // Get the database path from query parameters

    if (!dbPath) {
      return res.status(400).send('Database path is required'); // Ensure to return the response
    }

    try {
      const studentsByField = await readDatabase(dbPath);
      const students = studentsByField[major] || [];

      return res.status(200).send(`List: ${students.join(', ')}`); // Ensure to return the response
    } catch (error) {
      return res.status(500).send('Cannot load the database'); // Ensure to return the response
    }
  }
}

export default StudentsController;
