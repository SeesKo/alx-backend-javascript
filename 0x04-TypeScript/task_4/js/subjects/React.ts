namespace Subjects {
  // Add an optional attribute to Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    constructor(private _teacher: Teacher) {
      super();
    }

    public getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    public getAvailableTeacher(): string {
      if (this._teacher.experienceTeachingReact) {
        return `Available Teacher: ${this._teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
