import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCampusEventPageComponent } from './create-campus-event-page.component';

describe('CreateCampusEventPageComponent', () => {
  let component: CreateCampusEventPageComponent;
  let fixture: ComponentFixture<CreateCampusEventPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCampusEventPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCampusEventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
