import {
  settingsOutline,
  settingsSharp,
  terminalOutline,
  terminalSharp
} from 'ionicons/icons'
import React from 'react'
import { Route } from 'react-router-dom'

import Config from './Config'
import Page from './Page'
import PageInicio from './PageInicio'

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
    component: <PageInicio/>
  },
  {
    title: PATHS.URL_PAGE_NAME.title,
    url: PATHS.URL_PAGE_NAME.path,
    iosIcon: terminalOutline,
    mdIcon: terminalSharp,
    component: <Page/>
  },
  {
    title: PATHS.URL_PAGE.title,
    url: PATHS.URL_PAGE.path,
    iosIcon: terminalOutline,
    mdIcon: terminalSharp,
    component: <></>
  },
  {
    title: PATHS.URL_CONFIG.title,
    url: PATHS.URL_CONFIG.path,
    iosIcon: settingsOutline,
    mdIcon: settingsSharp,
    component: <Config/>
  }
]
const tagAppPages = () => {
  return appPages.map(({ url, component }, index) => (
        <Route
          key={index}
          path={url}
          exact={true}
          component={() => component}
        />
  ))
}

export default tagAppPages
