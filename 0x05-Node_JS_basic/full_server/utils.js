// Reads database asynchronously and returns a promise
import fs from 'fs';

async function readDatabase(path) {
  try {
    const data = await fsPromises.readFile(path, 'utf8');
    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');

    const header = lines[0].split(',');
    const rows = lines.slice(1);
    const indexFirstname = header.indexOf('firstname');
    const indexField = header.indexOf('field');

    if (indexFirstname === -1 || indexField === -1) {
      throw new Error('Invalid database format');
    }

    const studentsByField = {};

    rows.forEach((row) => {
      const columns = row.split(',');
      const firstname = columns[indexFirstname];
      const field = columns[indexField];

      if (field) {
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      }
    });

    return studentsByField;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

export default readDatabase;
