import moment from 'moment';

export default function formatDate(date?: string): string {
  return moment(date).format('DD/MM/YYYY [às] HH:mm');
}
