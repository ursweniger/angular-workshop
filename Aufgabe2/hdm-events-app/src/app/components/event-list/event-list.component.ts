import { Component } from '@angular/core';
import Events from '../../../../../../content/events';
import { Event } from '../../models/event';
import { EventListItemComponent } from './event-list-item/event-list-item.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [EventListItemComponent, NgForOf],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css',
})
export class EventListComponent {
  events: Event[] = Events;
}
