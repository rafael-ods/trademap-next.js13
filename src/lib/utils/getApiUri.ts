export default function getApiUri(path = '') {
  return `${process.env.NEXTAUTH_URL}${path}`
}
