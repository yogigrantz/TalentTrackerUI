import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { CandidatesComponent } from './pages/candidates/candidates.component';

import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { PlacementsComponent } from './pages/placements/placements.component';
import { CandidateDetailsComponent } from './pages/candidate-details/candidate-details.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { CandidateAddComponent } from './pages/candidate-add/candidate-add.component';
import { VersionComponent } from './pages/version/version.component';
import { JobAddComponent } from './pages/job-add/job-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CandidatesComponent,
    DashboardComponent,
    JobsComponent,
    PlacementsComponent,
    CandidateDetailsComponent,
    CompaniesComponent,
    ClientsComponent,
    CandidateAddComponent,
    VersionComponent,
    JobAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
