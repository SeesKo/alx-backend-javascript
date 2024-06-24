export default function iterateThroughObject(reportWithIterator) {
  // Initialize an empty array to collect employee names
  const employees = [];

  // Iterate through the iterator and collect each employee name
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  // Join the employee names with ' | ' as separator and return the resulting string
  return employees.join(' | ');
}
