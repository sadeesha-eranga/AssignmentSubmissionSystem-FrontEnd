import {Component, OnInit, ViewChild} from '@angular/core';
import {Batch} from '../../models/batch';
import {BatchService} from '../../services/batch.service';
import swal from 'sweetalert2';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {BatchTableDataSource} from '../batch-table/batch-table-datasource';

export interface PeriodicElement {
  batchNo: number;
  name: string;
  branch: string;
}

@Component({
  selector: 'app-manage-batches',
  templateUrl: './manage-batches.component.html',
  styleUrls: ['./manage-batches.component.css']
})
export class ManageBatchesComponent implements OnInit {
  selectedBatch: Batch = new Batch();
  dataSource: BatchTableDataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['batchNo', 'name', 'branch'];

  constructor(private batchService: BatchService) {
  }

  ngOnInit() {
    this.dataSource = new BatchTableDataSource(this.paginator, this.sort, []);
    this.loadBatches();
  }

  saveBatch() {
    this.batchService.saveBatch(this.selectedBatch).subscribe((result) => {
      if (result) {
        swal({
          title: 'Successful!',
          text: 'Batch has been saved successfully.',
          type: 'success'
        });
        this.clear();
        this.loadBatches();
      } else {
        swal({
          title: 'Failed!',
          text: 'Unable to save the batch.',
          type: 'error'
        });
      }
    });
  }

  updateBatch() {
    this.batchService.updateBatch(this.selectedBatch).subscribe((result) => {
      if (result) {
        swal({
          title: 'Successful!',
          text: 'Batch has been updated successfully.',
          type: 'success'
        });
        this.clear();
        this.loadBatches();
      } else {
        swal({
          title: 'Failed!',
          text: 'Unable to update the batch.',
          type: 'error'
        });
      }
    });
  }

  clear() {
    this.selectedBatch = new Batch();
  }

  loadBatches() {
    this.batchService.getAllBatches().subscribe((result) => {
      this.dataSource = new BatchTableDataSource(this.paginator, this.sort, result);
    });
  }

}
