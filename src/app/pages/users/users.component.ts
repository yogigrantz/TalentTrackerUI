import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private http: HttpClient) {}
  
  users: any[] = [];
  
    ngOnInit(): void {
  
    const token = localStorage.getItem('tt_token');
  
    if (!token) {
      console.error('No token found');
      return;
    }
  
    this.http.get<any[]>(environment.apiBaseUrl + '/api/Registration',
     {
          headers: {
            Authorization: `Bearer ${token}`
          }
     })
        .subscribe(data => {
          this.users = data;
          console.log("Candidates:", data);
        });
  
    }
  
}
