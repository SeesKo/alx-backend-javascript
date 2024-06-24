export default function createIteratorObject(report) {
  // Define a generator function to yield each employee
  function* iterateEmployees(report) {
    // Iterate over each department in the report
    for (const department in report.allEmployees) {
      // Iterate over each employee in the current department
      for (const employee of report.allEmployees[department]) {
        yield employee; // Yield each employee name
      }
    }
  }

  // Return an object with a Symbol.iterator method that returns the generator
  return {
    [Symbol.iterator]: function() {
      return iterateEmployees(report);
    }
  };
}
