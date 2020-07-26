import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  url = "http://localhost:5000/"

  constructor(private http: HttpClient) { }

  getTotalSum(){
    return this.http.get(this.url+"totalSum")
  }
  getAnalyse(){

    return this.http.get(this.url+"analyse")
  }
}
