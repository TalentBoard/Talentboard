export class Applicant {
  public id: string;
  public name: string;
  public email: string;
  public phoneNumber: string;
  public status: string;
  public about: string;
  public resumeURL: string;
  public coverLetterURL: string;
  public currentEmployer: string;
  public currentTitle: string;
  public favouritedUserIds: Array<string>;
  public assignedUserId: string;
  public jobId: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.phoneNumber = '';
    this.status = 'Applied';
    this.about = '';
    this.resumeURL = '';
    this.coverLetterURL = '';
    this.currentEmployer = '';
    this.currentTitle = '';
    this.favouritedUserIds = [];
    this.assignedUserId = '';
    this.jobId = '';
  }
}
