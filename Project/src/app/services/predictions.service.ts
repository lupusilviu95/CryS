import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPredictionsResult } from '../models/predictions-model';

@Injectable({
  providedIn: 'root'
})
export class PredictionsService {
  private static API_URL = 'https://4cgsg07w3e.execute-api.eu-central-1.amazonaws.com/beta/predictions';

  constructor(private http: HttpClient) {
  }

  public getPredictions(): Observable<GetPredictionsResult> {
    return this.http.get<GetPredictionsResult>(`${PredictionsService.API_URL}/`);
  }

  public getPrediction(id: string): Observable<GetPredictionsResult> {
    return this.http.get<GetPredictionsResult>(`${PredictionsService.API_URL}/${id}`);
  }
}
