// Export the Teacher interface
export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [index: string]: any; // Allow for additional dynamic properties
}

// Define and export the Directors interface extending Teacher
export interface Directors extends Teacher {
    numberOfReports: number;
}

// Define the printTeacherFunction interface
export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Define the StudentClassConstructor interface
export interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// Define the StudentClassInterface interface
export interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Implement the StudentClass
export class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// Export createStudent function
export function createStudent(firstName: string, lastName: string): StudentClass {
    return new StudentClass(firstName, lastName);
}
