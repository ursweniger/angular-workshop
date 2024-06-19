import { Component, Input } from '@angular/core';
import { CampusEvent } from '../../../models/campus-event';

@Component({
  selector: 'app-campus-event-list-item',
  standalone: true,
  imports: [],
  templateUrl: './campus-event-list-item.component.html',
  styleUrl: './campus-event-list-item.component.css',
})
export class CampusEventListItemComponent {
  @Input() campusEvent?: CampusEvent;
}
