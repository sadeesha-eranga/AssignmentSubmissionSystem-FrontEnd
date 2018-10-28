import {Component, OnInit, ViewChild} from '@angular/core';
import {BatchService} from '../../services/batch.service';
import {Batch} from '../../models/batch';
import {Student} from '../../models/student';
import {StudentService} from '../../services/student.service';
import {MatPaginator, MatSort} from '@angular/material';
import {StudentTableDataSource} from '../data-sources/student-table-data-source';
import swal from 'sweetalert2';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css'],
  providers: []
})
export class ManageStudentsComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  maxDate = new Date();
  selectedStudent: Student = new Student();
  batches: Batch[] = [];
  dataSource: StudentTableDataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['studentId', 'name', 'branch', 'gender', 'dob', 'email', 'mobile'];

  constructor(private batchService: BatchService, private studentService: StudentService) { }

  ngOnInit() {
    this.dataSource = new StudentTableDataSource(this.paginator, this.sort, []);
    this.loadStudents();
    this.batchService.getAllBatches().subscribe((result) => {
      this.batches = result;
    });
  }

  saveStudent() {
    this.studentService.saveStudent(this.selectedStudent).subscribe((result) => {
      if (result) {
        swal({
          title: 'Successful!',
          text: 'Student has been saved successfully.',
          type: 'success'
        });
        this.clear();
        this.loadStudents();
      } else {
        swal({
          title: 'Failed!',
          text: 'Unable to save the student.',
          type: 'error'
        });
      }
    });
  }

  loadStudents() {
    this.studentService.getAllStudents().subscribe((result) => {
      this.dataSource = new StudentTableDataSource(this.paginator, this.sort, result);
    });
  }

  clear() {
    this.selectedStudent = new Student();
  }
}
