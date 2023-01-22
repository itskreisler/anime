import {
  settingsOutline,
  settingsSharp,
  terminalOutline,
  terminalSharp
} from 'ionicons/icons'
import React, { Suspense, lazy } from 'react'
import { Route } from 'react-router-dom'

const pathTitle = ([path, title]) => ({ path, title })
export const PATHS = {
  URL_DEFAULT: pathTitle(['/', 'Inicio']),
  URL_PAGE: pathTitle(['/page', 'Pages']),
  URL_PAGE_NAME: pathTitle(['/page/:name', 'Page']),
  URL_CONFIG: pathTitle(['/config', 'Configuracion'])
}
export const appPages = [
  {
    title: PATHS.URL_DEFAULT.title,
    url: PATHS.URL_DEFAULT.path,
    iosIcon: terminalOutline,
    mdIcon: terminalSharp,
    Component: lazy(() => import('./PageInicio'))
  },
  {
    title: PATHS.URL_PAGE_NAME.title,
    url: PATHS.URL_PAGE_NAME.path,
    iosIcon: terminalOutline,
    mdIcon: terminalSharp,
    Component: lazy(() => import('./Page'))
  },
  {
    title: PATHS.URL_PAGE.title,
    url: PATHS.URL_PAGE.path,
    iosIcon: terminalOutline,
    mdIcon: terminalSharp,
    Component: lazy(() => import('./PageTemplate'))
  },
  {
    title: PATHS.URL_CONFIG.title,
    url: PATHS.URL_CONFIG.path,
    iosIcon: settingsOutline,
    mdIcon: settingsSharp,
    Component: lazy(() => import('./Config'))
  }
]
const TagAppPages = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      {appPages.map(({ url, Component }, index) => (
        <Route
          key={index}
          path={url}
          exact={true}
          children={<Component />}
        />
      ))}
    </Suspense>
  )
}

export default TagAppPages
