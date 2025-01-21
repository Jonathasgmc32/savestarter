import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:8080/event';
  private authToken = sessionStorage.getItem('auth-token');
  constructor(private http: HttpClient) { }
  getEvents(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}` 
    });

    return this.http.get<Event[]>(this.apiUrl, { headers });
  }
}
