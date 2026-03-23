import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboard: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadDashboard();
  }

loadDashboard() {
      const token = localStorage.getItem('tt_token');

      if (!token) {
        console.error('No token found');
        return;
      }

      this.http.get('https://talenttrack.azurewebsites.net/api/v1/Dashboard', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .subscribe({
      next: (data: any) => {
        this.dashboard = data;
        console.log("SUCCESS:", data);
      },
      error: (err) => {
        console.error("ERROR:", err);
      }
    });
}

}