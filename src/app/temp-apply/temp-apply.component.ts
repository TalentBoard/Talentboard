import { Component, OnInit } from '@angular/core';
import { Applicant } from '../model/Applicant';
import { ApplicantService } from '../core/applicant.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  selector: 'app-temp-apply',
  templateUrl: './temp-apply.component.html',
  styleUrls: ['./temp-apply.component.scss']
})
export class TempApplyComponent implements OnInit {

  refCoverLetter: AngularFireStorageReference;
  taskCoverLetter: AngularFireUploadTask;
  refResume: AngularFireStorageReference;
  taskResume: AngularFireUploadTask;
  newApplicant: Applicant = new Applicant();
  applied: Boolean;

  constructor(public applicantService: ApplicantService, public afStorage: AngularFireStorage) { }

  ngOnInit() {
    this.applied = false;
  }

  uploadResume(event) {
    const id = Math.random().toString(36).substring(2);
    this.refResume = this.afStorage.ref(id);
    this.taskResume = this.refResume.put(event.target.files[0]);
    this.taskResume.then( res => {
      res.ref.getDownloadURL().then( res2 => {
        this.newApplicant.resumeURL = res2;
      });
    });
  }

  uploadCoverLetter(event) {
    const id = Math.random().toString(36).substring(2);
    this.refCoverLetter = this.afStorage.ref(id);
    this.taskCoverLetter = this.refCoverLetter.put(event.target.files[0]);
    this.taskCoverLetter.then( res => {
      res.ref.getDownloadURL().then( res2 => {
        this.newApplicant.coverLetterURL = res2;
      });
    });
  }

  applyToJob() {
    this.applicantService.addApplicant(this.newApplicant, '-LHeDXD-vULI8NjUrcAk');
    this.applied = true;
  }

}
