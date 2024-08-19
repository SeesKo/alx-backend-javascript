// More complex HTTP server
const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const countStudents = require('./3-read_file_async');

// Function to handle requests
const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    // Handle root URL "/"
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    // Handle "/students" URL
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');

    // Get the path to the CSV file from command-line arguments
    const databasePath = process.argv[2];

    try {
      // Use countStudents from 3-read_file_async.js
      await countStudents(databasePath);

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
    } catch (error) {
      res.write('Cannot load the database');
    }
    res.end();
  } else {
    // Handle unknown URLs
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found\n');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on http://127.0.0.1:1245');
});

module.exports = app;
