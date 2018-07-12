export class Job {
  public id: string;
  public title: string;
  public description: string;
  public location: string;
  public salary: string;
  public applicantIds: string;
  public isOpen: boolean;

  constructor() {
    this.title = '';
    this.description = '';
    this.location = '';
    this.salary = '';
    this.applicantIds = [];
    this.isOpen = true;
  }
}
