export class Applicant {
  public id: string;
  public name: string;
  public email: string;
  public phoneNumber: string;
  public status: string;
  public about: string;
  public resumeURL: string;
  public coverLetterURL: string;
  public favouritedUserIds: Array<string>;
  public assignedUserId: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
    this.phoneNumber = '';
    this.status = 'Applied';
    this.resumeURL = '';
    this.favouritedUserIds = [];
    this.assignedUserId = '';
  }
}
