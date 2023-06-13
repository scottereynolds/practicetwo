import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightinfopayloadService {
  private baseURL = `https://us-central1-crm-sdk.cloudfunctions.net/flightInfoChallenge`;
  private token = `SGV5IFNjb3R0ISBJZiB5b3UgZGVjb2RlZCB0aGlzLCBwbGVhc2UgYnJpbmcgaXQgdXAgaW4gdGhlIGludGVydmlldyBmb3IgYm9udXMgcG9pbnRzISE`;
  postData(input: any): Observable<any> {    
    const headers = { 'token': `${this.token}`, 'Access-Control-Allow-Origin': '*' };
    return this.http.post(`${this.baseURL}`, input, { headers });
  }
  constructor(private http: HttpClient) { }
}
