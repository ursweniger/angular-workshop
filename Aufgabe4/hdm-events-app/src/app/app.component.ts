import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CampusEventListComponent } from './components/campus-event-list/campus-event-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CampusEventListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'hdm-events-app';
  heading: string = 'HdM Events';
  showCampusEvents: boolean = false;
  showCampusEventsButtonLabel: string = 'Events anzeigen';

  toggleShowCampusEvents() {
    this.showCampusEvents = !this.showCampusEvents;
    this.showCampusEventsButtonLabel = this.showCampusEvents
      ? 'Events verbergen'
      : 'Events anzeigen';
  }
}
