import { Routes } from '@angular/router';
import { CampusEventsPageComponent } from './pages/campus-events-page/campus-events-page.component';
import { CreateCampusEventPageComponent } from './pages/create-campus-event-page/create-campus-event-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CampusEventsPageComponent,
  },
  {
    path: 'create-campus-event',
    component: CreateCampusEventPageComponent,
  },
];
