import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSingleComponent } from './event-single.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { provideRouter } from '@angular/router';

describe('EventSingleComponent', () => {
  let component: EventSingleComponent;
  let fixture: ComponentFixture<EventSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventSingleComponent],
      providers: [provideHttpClient(withFetch()), MessageService, provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(EventSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
