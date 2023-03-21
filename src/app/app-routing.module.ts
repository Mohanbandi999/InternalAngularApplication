import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthModule } from './auth/auth.module';
import { ChildoneComponent } from './childone/childone.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ObservablesComponent } from './observables/observables.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard]},
  { path: 'catalog', component: ChildoneComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path: 'login',component:LoginComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
