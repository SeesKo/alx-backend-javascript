// Read database file synchronously
const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      // No valid data (header only or empty file)
      console.log('Number of students: 0');
      return;
    }

    // Initialize a map to hold students by field
    const fieldMap = {};
    let totalStudents = 0;

    // Process each line
    lines.slice(1).forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');

      if (firstname && lastname && age && field) {
        if (!fieldMap[field]) {
          fieldMap[field] = [];
        }
        fieldMap[field].push(firstname);
        totalStudents += 1;
      }
    });

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the count and list of students by field
    Object.keys(fieldMap).forEach((field) => {
      const names = fieldMap[field].join(', ');
      console.log(`Number of students in ${field}: ${fieldMap[field].length}. List: ${names}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
