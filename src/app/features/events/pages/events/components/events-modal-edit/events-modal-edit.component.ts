import {
  Component,
  inject,
  Input,
  Output,
  signal,
  computed,
  effect,
  EventEmitter,
} from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import moment from 'moment';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { RadioButton } from 'primeng/radiobutton';
import { EventsService } from '../../../../events.service';

@Component({
  selector: 'app-events-modal-edit',
  imports: [
    Dialog,
    ButtonModule,
    InputTextModule,
    TextareaModule,
    ReactiveFormsModule,
    RadioButton,
  ],
  templateUrl: './events-modal-edit.component.html',
  styleUrl: './events-modal-edit.component.scss',
})
export class EventsModalEditComponent {
  eventsService = inject(EventsService);
  formBuilder = inject(FormBuilder);
  @Input() visible = signal<boolean>(false);
  formEditEvent!: FormGroup;
  @Input() selectedEventId!: number;
  title = signal<string>('');
  event = this.eventsService.event;
  isLoading = computed(() => this.eventsService.isLoading());

  async fillForm() {
    this.eventsService.getEvent(this.selectedEventId).subscribe({
      next: (event) => {
        this.formEditEvent.patchValue({
          title: event.title,
          description: event.description,
          date: moment(event.publishedAt).format('YYYY-MM-DD'),
          status: event.status,
        });
      },
    });
  }

  updateEvent() {
    if (this.formEditEvent.valid) {
      this.eventsService.editEvent(this.selectedEventId, {
        ...this.formEditEvent.value,
        publishedAt: `${this.formEditEvent.value.date}T00:00:00`,
      });
    }
  }

  resetForm() {
    this.event.set(null);
  }

  handleClickClose() {
    this.visible.set(false);
  }

  ngOnInit() {
    this.formEditEvent = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    });
  }
}
