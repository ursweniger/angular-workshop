### app.component.ts

```
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CampusEventsPageComponent } from './pages/campus-events-page/campus-events-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CampusEventsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'hdm-events-app';
  heading: string = 'HdM Events';
}
```

### app.component.html

```
<div class="w-full flex flex-col items-center text-center gap-8 px-4 py-16">
  <h1 class="text-4xl text-primary font-bold">{{ heading }}</h1>
  <app-campus-events-page></app-campus-events-page>
</div>
```

### campus-events-page.component.ts

```
import { Component } from '@angular/core';
import { CampusEventListComponent } from '../../components/campus-event-list/campus-event-list.component';

@Component({
  selector: 'app-campus-events-page',
  standalone: true,
  imports: [CampusEventListComponent],
  templateUrl: './campus-events-page.component.html',
  styleUrl: './campus-events-page.component.css',
})
export class CampusEventsPageComponent {
  showCampusEvents: boolean = false;
  showCampusEventsButtonLabel: string = 'Events anzeigen';

  toggleShowCampusEvents() {
    this.showCampusEvents = !this.showCampusEvents;
    this.showCampusEventsButtonLabel = this.showCampusEvents
      ? 'Events verbergen'
      : 'Events anzeigen';
  }
}
```

### campus-events-page.component.html

```
<button
  class="max-w-52 border-2 rounded-2xl p-4 font-bold text-secondary"
  (click)="toggleShowCampusEvents()"
>
  {{ showCampusEventsButtonLabel }}
</button>
@if (showCampusEvents) {
<app-campus-event-list />
}
```
