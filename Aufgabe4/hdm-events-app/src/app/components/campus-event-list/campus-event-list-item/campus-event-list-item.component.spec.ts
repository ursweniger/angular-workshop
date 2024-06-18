import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusEventListItemComponent } from './campus-event-list-item.component';

describe('CampusEventListItemComponent', () => {
  let component: CampusEventListItemComponent;
  let fixture: ComponentFixture<CampusEventListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampusEventListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampusEventListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
