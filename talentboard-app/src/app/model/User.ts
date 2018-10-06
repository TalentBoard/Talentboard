export class User {
  id: string;
  name: string;
  email: string;
  title: string;
  company: string;
  jobIds: Array<string>;
  currentJobView: string;
  profileURL: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.email = '';
    this.jobIds = [];
    this.currentJobView = '';
    this.profileURL = '';
  }
}
