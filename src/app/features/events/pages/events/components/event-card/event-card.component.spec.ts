import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardComponent } from './event-card.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

describe('EventCardComponent', () => {
  let component: EventCardComponent;
  let fixture: ComponentFixture<EventCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCardComponent],
      providers:[
         provideHttpClient(withFetch()),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
