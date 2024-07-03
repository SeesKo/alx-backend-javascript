interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
let student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

let student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "San Francisco"
};

// Array containing the two students
let studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Find the container where the table will be appended
    let container = document.getElementById("students-table");

    if (container) {
        // Create a table element
        let table = document.createElement("table");
        table.border = "1";

        // Create headers row
        let headersRow = table.insertRow();
        let firstNameHeader = headersRow.insertCell();
        firstNameHeader.textContent = "First Name";
        let locationHeader = headersRow.insertCell();
        locationHeader.textContent = "Location";

        // Iterate over studentsList and create rows for each student
        studentsList.forEach(student => {
            let row = table.insertRow();
            let firstNameCell = row.insertCell();
            firstNameCell.textContent = student.firstName;
            let locationCell = row.insertCell();
            locationCell.textContent = student.location;
        });

        // Append the table to the container
        container.appendChild(table);
    }
});
