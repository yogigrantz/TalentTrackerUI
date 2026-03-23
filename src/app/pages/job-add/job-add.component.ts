import { Component, OnInit } from '@angular/core';
import { JobDto } from 'src/app/models/job.model';

@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.scss']
})
export class JobAddComponent  {

  job:JobDto = {
  id: 0,
  companyName:'',
  jobTitle:'',
  salary: 150000,
  hourlyRate:80
  };

  saveJob() {
    
  }

}
