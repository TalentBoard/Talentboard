export class User {
  id: string;
  name: string;
  email: string;
  provider: string;
  jobIds: Array<string>;
  profileURL: string;

  constructor() {
    this.id = '';
    this.profileURL = '';
    this.name = '';
    this.email = '';
    this.provider = '';
    this.jobIds = null;
  }
}
