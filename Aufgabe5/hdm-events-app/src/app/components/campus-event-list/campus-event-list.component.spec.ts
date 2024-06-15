import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusEventListComponent } from './campus-event-list.component';

describe('CampusEventListComponent', () => {
  let component: CampusEventListComponent;
  let fixture: ComponentFixture<CampusEventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampusEventListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampusEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
