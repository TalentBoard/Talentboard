import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Job } from '../model/Job';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable()
export class JobService {

  jobRef = this.db.list<Job>('jobs');
  jobs: Observable<Job[]>;

  constructor(private db: AngularFireDatabase) {
    this.jobs = this.jobRef.valueChanges();
  }

  getAllJobs(): Observable<Job[]> {
    return this.jobs;
  }

  addJob(job: Job) {
    job.id = this.db.createPushId();
    this.jobRef.set(job.id, job);
  }

  getJobById(id: string): Observable<Job> {
    return this.db.object<Job>(`jobs/${id}`).valueChanges();
  }

  updateJob(id: string, updatedJob: Job) {
    this.db.object<Job>(`jobs/${id}`).update(updatedJob);
  }

  addApplicantToJob(applicantId: string, jobId: string) {
    this.db.list(`jobs/${jobId}/applicantIds`).set(applicantId, applicantId);
  }
}
