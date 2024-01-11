export default function getPageTitle(title = '') {
  const pageTitle = 'Trademap'

  if (!title) return pageTitle

  return `${pageTitle} - ${title}`
}
