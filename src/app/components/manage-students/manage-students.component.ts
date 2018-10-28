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
  students: Array<Student> = [];

  constructor(private batchService: BatchService, private studentService: StudentService) { }

  ngOnInit() {
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
      this.students = result;
      console.log(result);
    });
  }

  deleteStudent() {
    this.studentService.deleteStudent(this.selectedStudent.studentId).subscribe((result) => {
      if (result) {
        swal({
          title: 'Successful!',
          text: 'Student has been deleted successfully.',
          type: 'success'
        });
        this.clear();
        this.loadStudents();
      } else {
        swal({
          title: 'Failed!',
          text: 'Unable to delete the student.',
          type: 'error'
        });
      }
    });
  }

  updateStudent() {
    this.studentService.updateStudent(this.selectedStudent).subscribe((result) => {
      if (result) {
        swal({
          title: 'Successful!',
          text: 'Student has been updated successfully.',
          type: 'success'
        });
        this.clear();
        this.loadStudents();
      } else {
        swal({
          title: 'Failed!',
          text: 'Unable to update the student.',
          type: 'error'
        });
      }
    });
  }

  selectStudent(student: Student) {
    this.selectedStudent = student;
  }

  clear() {
    this.selectedStudent = new Student();
  }
}
