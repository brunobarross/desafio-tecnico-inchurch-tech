export default function truncateText(text: string, length: number): string {
  return text.length > length ? text.substring(0, length) + '...' : text;
}
