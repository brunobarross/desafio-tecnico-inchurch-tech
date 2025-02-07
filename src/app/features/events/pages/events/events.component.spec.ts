import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsComponent } from './events.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MessageService } from 'primeng/api';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsComponent],
      providers:[
         provideHttpClient(withFetch()),
         MessageService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
