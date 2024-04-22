export default function buildUrlWithFilter(
  url : string, 
  filter? : Record<string, string>
) : string {
  if (filter) {
    return `${url}/?${Object.entries(filter).map(([key, value]) => `${key}=${value}`).join('&')}`
  }
  
  return url;
}
