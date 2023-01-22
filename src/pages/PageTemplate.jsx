import {
  IonCol,
  IonGrid,
  IonRow,
  IonFab,
  IonFabButton,
  IonIcon,

  IonSegment,

  IonSegmentButton,
  IonLabel
} from '@ionic/react'
import { addSharp, sparklesSharp } from 'ionicons/icons'

import { PATHS } from './TagAppPages'

import TagLayout from '../components/TagLayout'
import { TagHeaderWithMenuBtn } from '../components/TagHeader'
import { getWeekDay, hookDays, setWeekDay, today } from '../hooks/use-helpers'
import React, { useState } from 'react'
import TagSlides from '../components/TagSlides'
import { useMedia } from '../hooks/use-media'

const PageTemplate = () => {
  const [changeDay, setChangeDay] = useState(today.getDay())
  const [changeToday, setChangeToday] = useState(today)
  const movil = useMedia(
    // Media queries
    ['(min-width: 576px)'],
    // Column counts (relates to above media queries by array index)
    [false],
    // Default column count
    true
  )
  // const coverDefault = process.env.PUBLIC_URL + '/assets/icon/favicon.png'
  return (
    <TagLayout>
      <TagHeaderWithMenuBtn />
      <IonGrid>
        <IonRow
          className="ion-align-items-center"
          style={{ justifyContent: 'center' }}
        >
          <IonCol size={12}>
            <IonSegment scrollable={true} value={getWeekDay(changeToday)} style={{ overflow: 'auto' }}>
              {hookDays.map(({ name: { long, short }, isToday }, i) => (
                <IonSegmentButton
                  key={i}
                  value={long.es}
                  layout={'icon-end'}
                  onClick={() => {
                    setChangeDay(setWeekDay(i).getDay())
                    setChangeToday(setWeekDay(i))
                  }}
                >
                  <IonLabel>{movil ? short.es : long.es}</IonLabel>
                  {isToday && <IonIcon icon={sparklesSharp}></IonIcon>}
                </IonSegmentButton>
              ))}
            </IonSegment>
          </IonCol>
          <IonCol
            className="ion-align-self-center"
            style={{ textAlign: 'center' }}
            size={12}
            sizeMd={12}
          >
            <TagSlides changeDay={changeDay}></TagSlides>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton
          routerLink={PATHS.URL_CONFIG.path}
          routerDirection="forward"
          color={'dark'}
          size="small"
        >
          <IonIcon icon={addSharp} size="large" />
        </IonFabButton>
      </IonFab>
    </TagLayout>
  )
}

export default PageTemplate
