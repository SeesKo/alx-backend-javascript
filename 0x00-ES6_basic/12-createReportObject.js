export default function createReportObject(employeesList) {
  const departments = { ...employeesList };

  const reportObject = {
    allEmployees: departments,
    getNumberOfDepartments() {
      return Object.keys(departments).length;
    }
  };

  return reportObject;
}
