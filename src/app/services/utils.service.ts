import { Injectable } from '@angular/core';
import moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}
  formatDate(date?: string): string {
    return moment(date).format('DD/MM/YYYY [às] HH:mm');
  }
  truncateText(text: string, length: number): string {
    return text.length > length ? text.substring(0, length) + '...' : text;
  }
}
