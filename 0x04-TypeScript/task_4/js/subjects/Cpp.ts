namespace Subjects {
  // Declaration merging to add an optional attribute to Teacher interface
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    constructor(private _teacher: Teacher) {
      super();
    }

    public getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    public getAvailableTeacher(): string {
      if (this._teacher.experienceTeachingC) {
        return `Available Teacher: ${this._teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
