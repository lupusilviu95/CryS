import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPredictionsResponse } from '../models/predictions-model';

@Injectable({
  providedIn: 'root'
})
export class PredictionsService {
  private static API_URL = 'https://4cgsg07w3e.execute-api.eu-central-1.amazonaws.com/beta/predictions';

  constructor(private http: HttpClient) {
  }

  public getPredictions(): Observable<GetPredictionsResponse> {
    return this.http.get<GetPredictionsResponse>(PredictionsService.API_URL);
  }

  public getPrediction(symbol: string, period: number = 7): Observable<GetPredictionsResponse> {
    const params = new HttpParams()
      .set('symbol', symbol)
      .set('period', `${period}`);
    return this.http.get<GetPredictionsResponse>(PredictionsService.API_URL, {params});
  }
}
