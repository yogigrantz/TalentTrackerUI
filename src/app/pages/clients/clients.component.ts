import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})

export class ClientsComponent implements OnInit {

 
  clients: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

  const token = localStorage.getItem('tt_token');

  if (!token) {
    console.error('No token found');
    return;
  }

  this.http.get<any[]>('https://talenttrack.azurewebsites.net/api/v1/Client',
   {
        headers: {
          Authorization: `Bearer ${token}`
        }
   })
      .subscribe(data => {
        this.clients = data;
        console.log("Clients:", data);
      });

  }

}
