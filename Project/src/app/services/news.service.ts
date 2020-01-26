import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetNewsResult } from '../models/news-model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private static API_URL = 'https://4cgsg07w3e.execute-api.eu-central-1.amazonaws.com/beta/news';

  constructor(private http: HttpClient) {
  }

  public getAllNews(): Observable<GetNewsResult> {
    return this.http.get<GetNewsResult>(NewsService.API_URL);
  }

  public getNews(symbol: string, limit: string = '10'): Observable<GetNewsResult> {
    const params = new HttpParams()
      .set('symbol', symbol)
      .set('limit', `${limit}`);
    return this.http.get<GetNewsResult>(NewsService.API_URL, {params});
  }
}
