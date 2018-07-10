export class AccountUser {
  id: string;
  profileImg: string;
  name: string;
  email: string;
  provider: string;
  jobIds: Array<string>;

  constructor() {
    this.id = '';
    this.profileImg = '';
    this.name = '';
    this.email = '';
    this.provider = '';
    this.jobIds = null;
  }
}
