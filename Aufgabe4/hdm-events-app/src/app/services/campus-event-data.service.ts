import { Injectable } from '@angular/core';
import CampusEvents from './../../../../../content/campus-events';
import { CampusEvent } from '../models/campus-event';

@Injectable({
  providedIn: 'root',
})
export class CampusEventDataService {
  private campusEvents: CampusEvent[] = CampusEvents;

  constructor() {}

  public getAllCampusEvents() {
    return this.campusEvents;
  }
}
