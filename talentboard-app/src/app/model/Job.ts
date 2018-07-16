export class Job {
  public id: string;
  public title: string;
  public description: string;
  public location: string;
  public salary: string;
  public applicantIds: Array<string>;
  public isOpen: boolean;

  constructor(desiredTitle?: string, isOpenStatus?: boolean) {
    this.title = desiredTitle || '';
    this.description = '';
    this.location = '';
    this.salary = '';
    this.applicantIds = [];
    this.isOpen = isOpenStatus && true;
  }
}
