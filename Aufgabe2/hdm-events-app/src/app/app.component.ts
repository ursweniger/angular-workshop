import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EventListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'hdm-events-app';
  heading: string = 'HdM Events';
  showEvents: boolean = false;
  showEventsButtonLabel: string = 'Events anzeigen';

  toggleShowEvents() {
    this.showEvents = !this.showEvents;
    this.showEventsButtonLabel = this.showEvents
      ? 'Events verbergen'
      : 'Events anzeigen';
  }
}
