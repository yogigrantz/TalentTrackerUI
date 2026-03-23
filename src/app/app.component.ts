import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TalentTrack-ui';

  isLoggedIn(): boolean {
     if (localStorage.getItem('tt_token')) 
       return true;
     else
       return false ;
  } 

  logout = function() {
    // Clear user session data (e.g., localStorage, cookies)
    localStorage.clear();
    // Redirect to login page
    window.location.href = '/login';
  };
}
