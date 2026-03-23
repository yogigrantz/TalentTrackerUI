import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.scss']
})
export class PlacementsComponent implements OnInit {

 
  placements: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

  const token = localStorage.getItem('tt_token');

  if (!token) {
    console.error('No token found');
    return;
  }

  this.http.get<any[]>('https://talenttrack.azurewebsites.net/api/v1/Placement',
   {
        headers: {
          Authorization: `Bearer ${token}`
        }
   })
      .subscribe(data => {
        this.placements = data;
        console.log("Placements:", data);
      });

  }

}
