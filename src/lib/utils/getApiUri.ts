export default function getApiUri(path = '') {
  return `${process.env.NEXT_PUBLIC_API_URI}${path}`
}
