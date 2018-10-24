import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainNavComponent} from './components/main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {DataTableComponent} from './components/data-table/data-table.component';
import {LoginComponent} from './components/login/login.component';
import {UserService} from './services/user.service';
import {AuthGuard} from './auth.guard';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {ManageStudentsComponent} from './components/manage-students/manage-students.component';
import {ManageAssignmentsComponent} from './components/manage-assignments/manage-assignments.component';
import {ManageResourcesComponent} from './components/manage-resources/manage-resources.component';
import {SweetAlert2Module} from '@toverux/ngx-sweetalert2';
import { StudentTableComponent } from './components/student-table/student-table.component';
import { ManageBatchesComponent } from './components/manage-batches/manage-batches.component';
import { BatchTableComponent } from './components/batch-table/batch-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DataTableComponent,
    LoginComponent,
    ManageStudentsComponent,
    ManageAssignmentsComponent,
    ManageResourcesComponent,
    StudentTableComponent,
    ManageBatchesComponent,
    BatchTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SweetAlert2Module,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule
  ],
  providers: [
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
