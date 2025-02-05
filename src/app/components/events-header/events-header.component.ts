import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events-header',
  standalone: true,
  imports: [
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
  ],
  templateUrl: './events-header.component.html',
  styleUrl: './events-header.component.scss',
})
export class EventsHeaderComponent {
  @Output() visualizationModeChange = new EventEmitter<string>();
  visualizationMode: string = 'grid';
  value?: string;

  setVisualizationMode(mode: string): void {
    this.visualizationMode = mode;
    this.visualizationModeChange.emit(mode);
  }
}
