import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})

export class JobsComponent implements OnInit {

 
  jobs: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

  const token = localStorage.getItem('tt_token');

  if (!token) {
    console.error('No token found');
    return;
  }

  this.http.get<any[]>(environment.apiBaseUrl + '/api/v1/Job',
   {
        headers: {
          Authorization: `Bearer ${token}`
        }
   })
      .subscribe(data => {
        this.jobs = data;
        console.log("Jobs:", data);
      });

  }

}
