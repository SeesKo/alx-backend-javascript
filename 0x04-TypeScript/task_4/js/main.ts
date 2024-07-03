// Create a constant for Cpp subject
export const cpp: Subjects.Cpp = new Subjects.Cpp();

// Create a constant for Java subject
export const java: Subjects.Java = new Subjects.Java();

// Create a constant for React subject
export const react: Subjects.React = new Subjects.React();

// Create a Teacher object with experience in teaching C++
export const cTeacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10
};

// Log and demonstrate functionality for Cpp subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Log and demonstrate functionality for Java subject
console.log("\nJava");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Log and demonstrate functionality for React subject
console.log("\nReact");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
