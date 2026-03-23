import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CandidateDto } from 'src/app/models/candidate.model';


@Component({
  selector: 'app-candidate-add',
  templateUrl: './candidate-add.component.html',
  styleUrls: ['./candidate-add.component.scss']
})
export class CandidateAddComponent {
candidate:CandidateDto = {
name:'',
email:'',
phone:'',
city:'',
state:'',
zip:'',
profession:''
};

constructor(private http:HttpClient, private router:Router){}

saveCandidate(){

const token = localStorage.getItem('tt_token');

      this.http.post(
        'https://talenttrack.azurewebsites.net/api/v1/Candidate',
        this.candidate,
        {
          responseType: 'text',
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      ).subscribe({
        next: () => {
          alert("Candidate saved");
          this.router.navigate(['/candidates']);
        },
        error: (err) => {
          console.error(err);
          alert("Save failed");
        }
      });
    }
}
