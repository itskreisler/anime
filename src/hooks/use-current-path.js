import { matchPath } from 'react-router-dom'

export const hookCurrentPath = (path, url) => {
  // console.log(url)
  const route = matchPath(url, { path, exact: true, strict: false })
  return !!route
}
