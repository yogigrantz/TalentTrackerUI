import { Component, OnInit } from '@angular/core';
import { JobDto } from 'src/app/models/job.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.scss']
})
export class JobAddComponent  {

  job:JobDto = {
  id: 0,
  company:'',
  jobTitle:'',
  salary: 150000,
  postedDate:'3/25/2026',
  hourly:80
  };

  constructor(private http:HttpClient,private router:Router) {} 

  saveJob() {
    const token = localStorage.getItem('tt_token');
    this.http.post(environment.apiBaseUrl + '/api/v1/Job',
        this.job,
        {
          responseType: 'text',
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      ).subscribe({
        next: () => {
          alert("Job saved");
          this.router.navigate(['/jobs']);
        },
        error: (err) => {
          console.error(err);
          alert("Save failed");
        }
      });

  }

}
