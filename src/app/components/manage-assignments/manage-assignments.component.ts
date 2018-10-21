import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';



@Component({
  selector: 'app-manage-assignments',
  templateUrl: './manage-assignments.component.html',
  styleUrls: ['./manage-assignments.component.css']
})
export class ManageAssignmentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showAlert() {
    swal('Success', 'SweetAlert showed successfully', 'success');
  }
}
