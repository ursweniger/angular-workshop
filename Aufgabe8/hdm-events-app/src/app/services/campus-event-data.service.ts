import { Injectable } from '@angular/core';
import { CampusEvent } from '../models/campus-event';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CampusEventDataService {
  private apiUrl = 'http://193.196.53.51:8443/events/';

  constructor(private httpClient: HttpClient) {}

  public getAllCampusEvents() {
    return this.httpClient.get<CampusEvent[]>(this.apiUrl);
  }

  public createCampusEvent(newCampusEvent: CampusEvent) {
    return this.httpClient.post<CampusEvent>(this.apiUrl, newCampusEvent);
  }
}
