import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPricesResponse } from '../models/prices-model';

@Injectable({
  providedIn: 'root'
})
export class PricesService {
  private static API_URL = 'https://4cgsg07w3e.execute-api.eu-central-1.amazonaws.com/beta/prices';

  constructor(private http: HttpClient) {
  }

  public getPrices(): Observable<GetPricesResponse> {
    return this.http.get<GetPricesResponse>(PricesService.API_URL);
  }

  public getPriceHistory(symbol: string, limit: number = 7): Observable<GetPricesResponse> {
    const params = new HttpParams()
      .set('symbol', symbol)
      .set('limit', `${limit}`);
    return this.http.get<GetPricesResponse>(PricesService.API_URL, {params});
  }
}
