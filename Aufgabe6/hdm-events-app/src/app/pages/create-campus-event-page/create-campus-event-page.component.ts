import { Component } from '@angular/core';
import { CampusEvent } from '../../models/campus-event';
import { CampusEventDataService } from '../../services/campus-event-data.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-campus-event-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-campus-event-page.component.html',
  styleUrl: './create-campus-event-page.component.css',
})
export class CreateCampusEventPageComponent {
  public newCampusEvent: CampusEvent = {
    id: Date.now(),
    name: '',
    date: '',
    location: '',
    description: '',
  };

  constructor(
    private campusEventDataService: CampusEventDataService,
    private router: Router
  ) {}

  public onCreateClick() {
    this.campusEventDataService
      .createCampusEvent(this.newCampusEvent)
      .subscribe({
        complete: () => this.router.navigate(['/']),
      });
  }
}
