import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Job } from '../model/Job';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable()
export class JobService {
  currentJob: Job;
  jobs: Observable<Job[]>;

  constructor(private db: AngularFireDatabase) {
    this.jobs = db.list<Job>('jobs').snapshotChanges().pipe(
      map(changes => changes.map(c => ({ id: c.payload.key, ... c.payload.val() })))
    );
  }

  getAllJobs(): Observable<Job[]> {
    this.jobs = this.db.list<Job>('jobs').valueChanges();
    return this.jobs;
  }

  addJob(job: Job) {
    this.db.list<Job>('jobs').push(job);
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
