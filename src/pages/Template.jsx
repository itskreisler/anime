import {
  IonCol,
  IonGrid,
  IonRow,
  IonFab,
  IonFabButton,
  IonIcon
} from '@ionic/react'
import { addSharp } from 'ionicons/icons'

import { PATHS } from './TagAppPages'

import './Pruebas.css'
import TagLayout from '../components/TagLayout'
import { TagHeaderWithMenuBtn } from '../components/TagHeader'

const Pruebas = () => {
  // const coverDefault = process.env.PUBLIC_URL + '/assets/icon/favicon.png'
  return (
    <TagLayout>
      <TagHeaderWithMenuBtn />
      <IonGrid>
        <IonRow
          className="ion-align-items-center"
          style={{ justifyContent: 'center' }}
        >
          <IonCol
            className="ion-align-self-center"
            style={{ textAlign: 'center' }}
            size={6}
            sizeMd={12}
          >

          </IonCol>
          <IonCol size={12}>

          </IonCol>

        </IonRow>
      </IonGrid>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton
          routerLink={PATHS.URL_CONFIG.path}
          routerDirection="none"
          color={'dark'}
          size="small"
        >
          <IonIcon icon={addSharp} size="large" />
        </IonFabButton>
      </IonFab>
    </TagLayout>
  )
}

export default Pruebas
