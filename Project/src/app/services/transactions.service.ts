import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetTransactionsResponse } from '../models/transactions-model';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private static API_URL = 'https://4cgsg07w3e.execute-api.eu-central-1.amazonaws.com/beta/transactions';

  constructor(private http: HttpClient) {
  }

  public getTransactions(): Observable<GetTransactionsResponse> {
    return this.http.get<GetTransactionsResponse>(TransactionsService.API_URL);
  }

  public getTransactionsForCoin(symbol: string): Observable<GetTransactionsResponse> {
    const params = new HttpParams()
      .set('symbol', symbol);
    return this.http.get<GetTransactionsResponse>(TransactionsService.API_URL, {params});
  }

}
