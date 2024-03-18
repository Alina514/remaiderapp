// reminder.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReminderModel } from '../models/reminder.model';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  private url: string = "http://localhost:8080/reminders";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  addReminder(request: ReminderModel): Observable<any>{
    return this.httpClient.post(this.url, request);
  }

  deleteReminder(id: string): Observable<any>{
    return this.httpClient.delete(this.url + "/" + id);
  }

  updateReminder(id: string, request:ReminderModel): Observable<any>{
    console.log(this.url + "/" + id);
    return this.httpClient.put(this.url + "/" + id, request);
  }
}