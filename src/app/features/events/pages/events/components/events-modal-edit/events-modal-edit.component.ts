import { Component, signal } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-events-modal-edit',
  imports: [Dialog, ButtonModule, InputTextModule],
  templateUrl: './events-modal-edit.component.html',
  styleUrl: './events-modal-edit.component.scss'
})
export class EventsModalEditComponent {
  visible = signal<boolean>(true);


}
