import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {BatchTableDataSource} from './batch-table-datasource';
import {BatchService} from '../../services/batch.service';

@Component({
  selector: 'app-batch-table',
  templateUrl: './batch-table.component.html',
  styleUrls: ['./batch-table.component.css'],
})
export class BatchTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: BatchTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['batchNo', 'name', 'branch'];

  constructor(private batchService: BatchService) {}

  ngOnInit() {
    this.dataSource = new BatchTableDataSource(this.paginator, this.sort, []);
    this.batchService.getAllBatches().subscribe((result) => {
      this.dataSource = new BatchTableDataSource(this.paginator, this.sort, result);
    });
  }
}
