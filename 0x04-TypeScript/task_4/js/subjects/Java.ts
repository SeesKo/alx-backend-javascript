namespace Subjects {
  // Add an optional attribute to Teacher interface
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    constructor(private _teacher: Teacher) {
      super();
    }

    public getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    public getAvailableTeacher(): string {
      if (this._teacher.experienceTeachingJava) {
        return `Available Teacher: ${this._teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
