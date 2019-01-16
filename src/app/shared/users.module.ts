export class Users {
  public name : string;
  public gender : string;
  public employee : string;
  public occupation : string;

  constructor( name: string, gender: string, employee: string, occupation: string ) {
    this.name = name;
    this.gender = gender;
    this.employee = employee;
    this.occupation = occupation;
  }
}