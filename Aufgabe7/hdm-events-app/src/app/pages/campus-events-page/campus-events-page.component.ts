import { Component } from '@angular/core';
import { CampusEventListComponent } from '../../components/campus-event-list/campus-event-list.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-campus-events-page',
  standalone: true,
  imports: [CampusEventListComponent, RouterLink],
  templateUrl: './campus-events-page.component.html',
  styleUrl: './campus-events-page.component.css',
})
export class CampusEventsPageComponent {
  showCampusEvents: boolean = false;
  showCampusEventsButtonLabel: string = 'Events anzeigen';
  createCampusEventButtonLabel: string = 'Neues Event erstellen';

  toggleShowCampusEvents() {
    this.showCampusEvents = !this.showCampusEvents;
    this.showCampusEventsButtonLabel = this.showCampusEvents
      ? 'Events verbergen'
      : 'Events anzeigen';
  }
}
