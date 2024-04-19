export function formatDate(dateString: string | undefined): string {
  if (!dateString) return "";
  return new Date(dateString).toDateString();
}
