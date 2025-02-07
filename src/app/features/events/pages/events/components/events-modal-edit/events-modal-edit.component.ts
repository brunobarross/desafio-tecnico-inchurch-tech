import { Component, signal } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { RadioButton } from 'primeng/radiobutton';

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
  constructor(private formBuilder: FormBuilder) {}
  visible = signal<boolean>(true);
  formEditEvent!: FormGroup;
  ngOnInit() {
    this.formEditEvent = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    });
  }
}
