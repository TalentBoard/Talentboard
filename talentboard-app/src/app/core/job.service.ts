import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Job } from '../model/Job';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class JobService {

  jobs: Observable<Job[]>;

  constructor(private db: AngularFireDatabase) {
    this.jobs = db.list<Job>('jobs').valueChanges();
  }

  getAllJobs(): Observable<Job[]> {
    return this.jobs;
  }

  addJob(job: Job) {
    this.db.list<Job>('jobs').push(job);
  }

  getJobById(id: string) {
    return this.db.object<Job>(`jobs/${id}`).valueChanges();
  }

  updateJob(id: string, updatedJob: Job) {
    this.db.list<Job>('jobs').set(id, updatedJob);
  }

}
