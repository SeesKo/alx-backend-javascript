// More complex HTTP server using Express
const express = require('express');
const fs = require('fs').promises;

// Initialize the Express app
const app = express();
const port = 1245;

// Function to count students (from 3-read_file_async.js)
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
    const header = lines[0].split(',');
    const rows = lines.slice(1);
    const indexFirstname = header.indexOf('firstname');
    const indexField = header.indexOf('field');

    if (indexFirstname === -1 || indexField === -1) {
      throw new Error('Invalid database format');
    }

    const studentsByField = {};
    let totalStudents = 0;

    rows.forEach((row) => {
      const columns = row.split(',');
      const firstname = columns[indexFirstname];
      const field = columns[indexField];

      if (field) {
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
        totalStudents += 1;
      }
    });

    let result = `Number of students: ${totalStudents}\n`;
    for (const [field, students] of Object.entries(studentsByField)) {
      result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }

    return result.trim();
  } catch (error) {
    return 'Cannot load the database';
  }
}

// Route for the home page
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for the students page
app.get('/students', async (req, res) => {
  const dbPath = process.argv[2]; // Get the database path from command line arguments
  if (!dbPath) {
    res.status(400).send('Database path is required');
    return;
  }

  try {
    const studentData = await countStudents(dbPath);
    res.send(`This is the list of our students\n${studentData}`);
  } catch (error) {
    res.status(500).send('Cannot load the database');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
