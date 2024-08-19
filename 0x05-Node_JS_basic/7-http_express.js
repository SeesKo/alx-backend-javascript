// More complex HTTP server using Express
const express = require('express');
const fs = require('fs').promises;
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  // Get the path to the CSV file from command-line arguments
  const databasePath = process.argv[2];

  try {
    // Use countStudents from 3-read_file_async.js
    await countStudents(databasePath);

    // Read and process the CSV file
    const data = await fs.readFile(databasePath, 'utf8');
    const lines = data.trim().split('\n');
    const rows = lines.slice(1).filter((line) => line.trim() !== '');

    const studentsByField = {};
    let totalStudents = 0;

    rows.forEach((row) => {
      const [firstname, , , field] = row.split(',');

      if (field) {
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
        totalStudents += 1;
      }
    });

    res.write(`Number of students: ${totalStudents}\n`);
    for (const [field, students] of Object.entries(studentsByField)) {
      res.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`);
    }
    res.end(); // End the response
  } catch (error) {
    res.write('Cannot load the database\n');
    res.end();
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});

module.exports = app;
