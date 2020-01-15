import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService<ResponseType, CreateRequestType, UpdateRequestType> {
  constructor(private http: HttpClient, protected resourceBaseUrl: string) { }

  apiUrl;

  getResource(id: string): Observable<ResponseType> {
    return this.http.get<ResponseType>(`${this.apiUrl}/${id}`);
  }

  createResource(resource: CreateRequestType): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/`,
      resource,
      { responseType: 'json' });
  }

  updateResource(id: string, request: UpdateRequestType): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/${id}`,
      request,
      { responseType: 'json' });
  }

  deleteResource(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
