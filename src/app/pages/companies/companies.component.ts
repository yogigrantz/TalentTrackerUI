import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})

export class CompaniesComponent implements OnInit {

 
  companies: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

  const token = localStorage.getItem('tt_token');

  if (!token) {
    console.error('No token found');
    return;
  }

  this.http.get<any[]>('https://talenttrack.azurewebsites.net/api/v1/Company',
   {
        headers: {
          Authorization: `Bearer ${token}`
        }
   })
      .subscribe(data => {
        this.companies = data;
        console.log("Companies:", data);
      });

  }

}
