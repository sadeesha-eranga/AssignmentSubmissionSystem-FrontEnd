import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Batch} from '../models/batch';
import {Observable} from 'rxjs';

const URL = 'http://localhost:8080/api/v1/batches';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor(private http: HttpClient, private router: Router) { }

  saveBatch(batch: Batch): Observable<boolean> {
    return this.http.post<boolean>(URL, batch);
  }

  updateBatch(batch: Batch): Observable<boolean> {
    return this.http.put<boolean>(URL + '/' + batch.batchNo, batch);
  }

  getAllBatches(): Observable<Array<Batch>> {
    return this.http.get<Array<Batch>>(URL);
  }
}
