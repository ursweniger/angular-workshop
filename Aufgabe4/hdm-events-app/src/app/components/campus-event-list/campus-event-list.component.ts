import { Component } from '@angular/core';
import { CampusEvent } from '../../models/campus-event';
import { CampusEventListItemComponent } from './campus-event-list-item/campus-event-list-item.component';
import { CampusEventDataService } from '../../services/campus-event-data.service';

@Component({
  selector: 'app-campus-event-list',
  standalone: true,
  imports: [CampusEventListItemComponent],
  templateUrl: './campus-event-list.component.html',
  styleUrl: './campus-event-list.component.css',
})
export class CampusEventListComponent {
  campusEvents: CampusEvent[] = [];

  constructor(private campusEventDataService: CampusEventDataService) {
    this.campusEvents = this.campusEventDataService.getCampusEvents();
  }
}
