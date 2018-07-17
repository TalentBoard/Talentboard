export class User {
  id: string;
  name: string;
  email: string;
  title: string;
  company: string;
  jobIds: Array<string>;
  profileURL: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.email = '';
    this.jobIds = [];
    this.profileURL = '';
  }
}
