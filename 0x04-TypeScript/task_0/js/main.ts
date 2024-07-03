export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "San Francisco"
};

// Array containing the two students
const studentsList: Student[] = [student1, student2];

// Function to render the students in a table
export const renderStudentsTable(students: Student[]) {
  const table = document.createElement('table');
  
  // Create table header row
  const headerRow = table.insertRow();
  const header1 = document.createElement('th');
  header1.textContent = 'First Name';
  headerRow.appendChild(header1);
  const header2 = document.createElement('th');
  header2.textContent = 'Location';
  headerRow.appendChild(header2);

  // Iterate over each student and create a row for them
  students.forEach(student => {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    cell1.textContent = student.firstName;
    const cell2 = row.insertCell();
    cell2.textContent = student.location;
  });

  // Append the table to the document body
  document.body.appendChild(table);
}

// Render the table
renderStudentsTable(studentsList);
