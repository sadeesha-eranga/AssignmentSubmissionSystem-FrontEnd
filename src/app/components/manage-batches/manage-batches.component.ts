import {Component, OnInit} from '@angular/core';
import {Batch} from '../../models/batch';
import {BatchService} from '../../services/batch.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-manage-batches',
  templateUrl: './manage-batches.component.html',
  styleUrls: ['./manage-batches.component.css']
})
export class ManageBatchesComponent implements OnInit {
  selectedBatch: Batch = new Batch();
  batches: Array<Batch> = [];
  isBatchSelected = false;

  constructor(private batchService: BatchService) {
  }

  ngOnInit() {
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
    this.isBatchSelected = false;
    this.selectedBatch = new Batch();
  }

  loadBatches() {
    this.batchService.getAllBatches().subscribe((result) => {
      if (null != result) {
        this.batches = result;
        console.log(result);
      }
    });
  }

  selectBatch(batch: Batch) {
    this.isBatchSelected = true;
    this.selectedBatch = batch;
  }

}
