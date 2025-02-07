import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsModalEditComponent } from './events-modal-edit.component';

describe('EventsModalEditComponent', () => {
  let component: EventsModalEditComponent;
  let fixture: ComponentFixture<EventsModalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsModalEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
