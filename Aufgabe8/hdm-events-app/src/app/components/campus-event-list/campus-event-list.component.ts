import { Component, OnDestroy } from '@angular/core';
import { CampusEvent } from '../../models/campus-event';
import { CampusEventListItemComponent } from './campus-event-list-item/campus-event-list-item.component';
import { CampusEventDataService } from '../../services/campus-event-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-campus-event-list',
  standalone: true,
  imports: [CampusEventListItemComponent],
  templateUrl: './campus-event-list.component.html',
  styleUrl: './campus-event-list.component.css',
})
export class CampusEventListComponent implements OnDestroy {
  campusEvents: CampusEvent[] = [];
  private subscription: Subscription;

  constructor(private campusEventDataService: CampusEventDataService) {
    this.subscription = this.campusEventDataService
      .getAllCampusEvents()
      .subscribe((data) => {
        console.log(data);
        this.campusEvents = data;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
