import { Component, OnInit } from '@angular/core';
import {Admin} from '../../models/admin';
import {Router} from '@angular/router';
import {AdminService} from '../../services/admin.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Admin = new Admin();

  constructor(private userService: AdminService, private router: Router) { }

  ngOnInit() {
  }

  authenticateUser() {
    this.userService.authenticateUser(this.user).subscribe((result) => {
      if (result) {
        this.router.navigate(['/dashboard']);
      } else {
        swal({
          title: 'Invalid Credentials!',
          text: 'Please check the username, password and try again.',
          type: 'error'
        });
      }
    });
  }
}
