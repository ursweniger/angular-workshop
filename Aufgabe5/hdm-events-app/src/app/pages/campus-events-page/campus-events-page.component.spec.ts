import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusEventsPageComponent } from './campus-events-page.component';

describe('CampusEventsPageComponent', () => {
  let component: CampusEventsPageComponent;
  let fixture: ComponentFixture<CampusEventsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampusEventsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampusEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
