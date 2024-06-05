import { Component } from '@angular/core';
import CampusEvents from '../../../../../../content/campus-events';
import { CampusEvent } from '../../models/campus-event';
import { CampusEventListItemComponent } from './campus-event-list-item/campus-event-list-item.component';

@Component({
  selector: 'app-campus-event-list',
  standalone: true,
  imports: [CampusEventListItemComponent],
  templateUrl: './campus-event-list.component.html',
  styleUrl: './campus-event-list.component.css',
})
export class CampusEventListComponent {
  campusEvents: CampusEvent[] = CampusEvents;
}
