import {
  settingsOutline,
  settingsSharp,
  terminalOutline,
  terminalSharp
} from 'ionicons/icons'
import React, { Suspense, lazy } from 'react'
import { Route } from 'react-router-dom'
import TagLayout from '../components/TagLayout'
import TagSpinner from '../components/TagSpinner'

const pathTitle = ([path, title]) => ({ path, title })
export const PATHS = {
  URL_DEFAULT: pathTitle(['/', 'Buscar Anime']),
  URL_PAGE: pathTitle(['/calendar', 'Calendario']),
  URL_PAGE_NAME: pathTitle(['/anime-search/:id', 'Anime']),
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
    <Suspense
      fallback={
        <TagLayout>
          <TagSpinner />
        </TagLayout>
      }
    >
      {appPages.map(({ url, Component }, index) => (
        <Route key={index} path={url} exact={true} children={<Component />} />
      ))}
    </Suspense>
  )
}

export default TagAppPages
