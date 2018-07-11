import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Job } from '../model/Job';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class JobService {
  currentJob:Job;
  jobs: Observable<Job[]>;
  jobs1:AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.jobs = db.list<Job>('jobs').valueChanges();
  }

  // getAllJobs(): Observable<Job[]> {
  //   this.jobs = this.db.list<Job>('jobs').valueChanges();
  //   return this.jobs;
  // }

  getAllJobs() {
    this.jobs1 = this.db.list('jobs');
    return this.jobs1;
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

  getJobByName(name:string){
    return this.db.list("jobs",ref=>{
      let q = ref.orderByChild("title").equalTo(name)
      return q;
    });
  }

}
