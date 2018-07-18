import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Applicant } from '../model/Applicant';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';
import { JobService } from './job.service';

@Injectable()
export class ApplicantService {

  applicants: Observable<Applicant[]>;
  currentApplicant: Applicant;

  constructor(private db: AngularFireDatabase, private jobService: JobService) {
    this.applicants = db.list<Applicant>('applicants').valueChanges();
  }

  getAllApplicants(): Observable<Applicant[]> {
    return this.applicants;
  }
  // getAllApplicants() {
  //   return this.db.list<Applicant>('applicants');
  // }

  addApplicant(applicant: Applicant, jobId: string) {
    applicant.id = this.db.createPushId();
    this.db.list<Applicant>('applicants').set(applicant.id, applicant);
    this.jobService.addApplicantToJob(applicant.id, jobId);
  }

  getApplicantById(id: string): Observable<Applicant> {
    return this.db.object<Applicant>(`applicants/${id}`).valueChanges();
  }

  updateApplicant(id: string, updatedApplicant: Applicant) {
    this.db.list<Applicant>('applicants').set(id, updatedApplicant);
  }

  getApplicantByStatus(status: string) {
    return this.db.list('applicants', ref => {
      const q = ref.orderByChild('status').equalTo(status);
      return q;
    });
  }
}
