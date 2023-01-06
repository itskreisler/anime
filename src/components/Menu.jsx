import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonText
} from '@ionic/react'
import Platform from 'react-platform-js'
import React, { useEffect, useCallback } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { logoGithub, starSharp } from 'ionicons/icons'
import './Menu.css'
import { appPages, PATHS } from '../pages/TagAppPages'
import { TagLinkToA } from './TagLinkTo'
import { useTitle } from 'react-use'
import { useDarkMode } from '../hooks/use-dark-mode'
import { hookCurrentPath } from '../hooks/use-current-path'

const Menu = () => {
  useDarkMode()
  const { pathname } = useLocation()
  const history = useHistory()
  const navigateTo = useCallback((url) => {
    history.push(url)
  }, [history])
  const findPage = appPages.find(
    ({ url, title }) => hookCurrentPath(url, pathname) && { title }
  )
  const labels = ['GitHub']
  const { OS } = Platform
  useEffect(() => {
    if (typeof findPage === 'undefined') {
      navigateTo(PATHS.URL_DEFAULT.path)
    }
    return () => {}
  }, [findPage, navigateTo])

  useTitle(`MyAnimeList | ${typeof findPage === 'undefined' ? '' : findPage?.title}`)
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>{findPage?.title}</IonListHeader>
          <IonNote>{OS}</IonNote>
          <IonText>@Hola mundo</IonText>
          {appPages.filter(({ url }) => !url.includes(':')).map(({ url, title, iosIcon, mdIcon }, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={pathname === url ? 'selected' : ''}
                  routerLink={url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon slot="start" ios={iosIcon} md={mdIcon} />
                  <IonLabel>{title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            )
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Creado con 💙</IonListHeader>
          {labels.map((label, index) => (
            <TagLinkToA
              key={index}
              href={'https://github.com/itskreisler/yo'}
              target={'_blank'}
              rel="noopener noreferrer"
            >
              <IonItem lines="none">
                <IonIcon slot="start" icon={logoGithub} />
                <IonLabel>{label}</IonLabel>
                <IonIcon slot="end" icon={starSharp} />
              </IonItem>
            </TagLinkToA>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  )
}

export default Menu
