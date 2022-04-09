export interface IEmployee {
  birthDate: Date;
  employeeId: number;
  firstName: string;
  lastName: string;
  personId: number;
  employeeNum: string;
  employedDate: Date;
  terminatedDate?: Date;
}

export class Employee implements IEmployee {
  employeeId: number = 0;
  birthDate: Date = new Date();
  firstName: string = '';
  lastName: string = '';
  personId: number = 0;
  employeeNum: string = '';
  employedDate: Date = new Date();
  terminatedDate?: Date | undefined;

  constructor(
    firstName: string,
    lastName: string,
    personId: number,
    employeeNum: string,
    employedDate: Date,
    terminatedDate?: Date) {

  }


}