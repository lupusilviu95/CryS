import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetPricesResult } from '../models/prices-model';

@Injectable({
  providedIn: 'root'
})
export class PricesService {
  private static API_URL = 'https://4cgsg07w3e.execute-api.eu-central-1.amazonaws.com/beta/prices';

  constructor(private http: HttpClient) {

  }

  public getPrices(): Observable<GetPricesResult> {
    return this.http.get<GetPricesResult>(`${PricesService.API_URL}/`);
  }

  public getPrice(id: string): Observable<GetPricesResult> {
    return this.http.get<GetPricesResult>(`${PricesService.API_URL}/${id}`);
  }
}
