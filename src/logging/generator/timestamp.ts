/**
 * This function generates the timestamp prefix for logging. Format: `<date>, <time>`
 */
export default function timestamp() : string {
  return new Date().toLocaleDateString(
    undefined,
    {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }
  )
}
