import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events-header',
  standalone: true,
  imports: [
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    TooltipModule,
  ],
  templateUrl: './events-header.component.html',
  styleUrl: './events-header.component.scss',
})
export class EventsHeaderComponent {
  @Output() visualizationModeChange = new EventEmitter<string>();
  @Output() search = new EventEmitter<string>();
  visualizationMode: string = 'grid';
  searchControl = new FormControl('');
  value?: string;
  searchValue?: string;

  setVisualizationMode(mode: string): void {
    this.visualizationMode = mode;
    this.visualizationModeChange.emit(mode);
  }

  handleSearch(search: string): void {
    this.search.emit(search);
    
  }
}
