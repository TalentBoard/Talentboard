export class User {
  id: string;
  name: string;
  email: string;
  provider: string;
  workplace: string;
  title: string;
  jobIds: Array<string>;
  profileURL: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.email = '';
    this.provider = '';
    this.workplace = '';
    this.title = '';
    this.jobIds = [];
    this.profileURL = '';
  }
}
