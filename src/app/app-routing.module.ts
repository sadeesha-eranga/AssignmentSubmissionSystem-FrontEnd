import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './auth.guard';
import {MainNavComponent} from './components/main-nav/main-nav.component';
import {ManageStudentsComponent} from './components/manage-students/manage-students.component';
import {ManageAssignmentsComponent} from './components/manage-assignments/manage-assignments.component';
import {ManageResourcesComponent} from './components/manage-resources/manage-resources.component';
import {ManageBatchesComponent} from './components/manage-batches/manage-batches.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', redirectTo: ''},
  {path: 'dashboard', component: MainNavComponent, canActivate: [AuthGuard]},
  {path: 'students', component: ManageStudentsComponent, canActivate: [AuthGuard]},
  {path: 'assignments', component: ManageAssignmentsComponent, canActivate: [AuthGuard]},
  {path: 'resources', component: ManageResourcesComponent, canActivate: [AuthGuard]},
  {path: 'batches', component: ManageBatchesComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
