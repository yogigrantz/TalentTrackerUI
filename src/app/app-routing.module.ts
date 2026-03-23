import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CandidatesComponent } from './pages/candidates/candidates.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { CandidateDetailsComponent } from './pages/candidate-details/candidate-details.component';
import { PlacementsComponent } from './pages/placements/placements.component';
import { CompaniesComponent } from './pages/companies/companies.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { CandidateAddComponent } from './pages/candidate-add/candidate-add.component';  
import { VersionComponent } from './pages/version/version.component'; 
import { JobAddComponent } from './pages/job-add/job-add.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'candidates', component: CandidatesComponent }, 
  { path: 'dashboard', component: DashboardComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'candidate-details', component: CandidateDetailsComponent },
  { path: 'placements', component: PlacementsComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'clients', component: ClientsComponent }, 
  { path: 'candidate/add', component: CandidateAddComponent},
  { path: 'version', component: VersionComponent},
  { path: 'job/add', component: JobAddComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
