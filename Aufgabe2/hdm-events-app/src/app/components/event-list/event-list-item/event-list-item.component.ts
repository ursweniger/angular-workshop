import { Component, Input } from '@angular/core';
import { Event } from '../../../models/event';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-event-list-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './event-list-item.component.html',
  styleUrl: './event-list-item.component.css',
})
export class EventListItemComponent {
  @Input() event?: Event;
}
