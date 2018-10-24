import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent implements OnInit {
  maxDate = new Date();
  selectedDate;

  constructor() { }

  ngOnInit() {
    this.selectedDate = new Date();
  }
}
