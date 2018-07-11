import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Applicant } from '../model/Applicant';
import { Observable } from 'rxjs/Observable';
import {NgForm} from "@angular/forms";

@Injectable()
export class ApplicantService {

  applicants: Observable<Applicant[]>;

  constructor(private db: AngularFireDatabase) {
    this.applicants = db.list<Applicant>('applicants').valueChanges();
  }

  // getAllApplicants(): Observable<Applicant[]> {
  //   return this.applicants;
  // }
  getAllApplicants() {
    return this.db.list<Applicant>('applicants');
  }

  addApplicant(applicant: Applicant) {
    this.db.list<Applicant>('applicants').push(applicant);
  }

  getApplicantById(id: string): Observable<Applicant> {
    return this.db.object<Applicant>(`applicants/${id}`).valueChanges();
  }

  updateApplicant(id: string, updatedApplicant: Applicant) {
    this.db.list<Applicant>('applicants').set(id, updatedApplicant);
  }

  onSubmit(jobForm:NgForm){

  }

  resetForm(jobForm?: NgForm) {

  }
}
