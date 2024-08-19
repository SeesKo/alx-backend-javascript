// Read database file synchronously
const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data by lines and filter out empty lines
    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');

    // Extract the header and rows
    const header = lines[0].split(',');
    const rows = lines.slice(1);

    // Map the header indices to their corresponding field names
    const indexFirstname = header.indexOf('firstname');
    const indexField = header.indexOf('field');

    if (indexFirstname === -1 || indexField === -1) {
      throw new Error('Invalid database format');
    }

    // Initialize a dictionary to store students by field
    const studentsByField = {};
    let totalStudents = 0;

    // Process each row
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

    // Output the results
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    // Handle errors
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
