import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Job } from '../model/Job';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable()
export class JobService {
  jobs: Observable<Job[]>;

  constructor(private db: AngularFireDatabase) {
    this.jobs = this.db.list<Job>('jobs').valueChanges();
  }

  getAllJobs(): Observable<Job[]> {
    return this.jobs;
  }

  addJob(job: Job) {
    job.id = this.db.createPushId();
    this.db.list<Job>('jobs').set(job.id, job);
  }

  getJobById(id: string): Observable<Job> {
    return this.db.object<Job>(`jobs/${id}`).valueChanges();
  }

  updateJob(id: string, updatedJob: Job) {
    this.db.list<Job>('jobs').set(id, updatedJob);
  }

  // getJobByName(name: string){
  //   return this.db.list("jobs",ref=>{
  //     let q = ref.orderByChild("title").equalTo(name)
  //     return q;
  //   });
  // }

}
