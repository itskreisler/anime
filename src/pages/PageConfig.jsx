import {
  IonCard,
  IonLabel,
  IonToggle,
  IonCardContent,
  IonItem,
  IonButton,
  IonIcon,
  useIonAlert,
  useIonToast
} from '@ionic/react'
import { trashSharp } from 'ionicons/icons'
import React from 'react'

import { useDarkMode } from '../hooks/use-dark-mode'
import { PATHS } from './TagAppPages'
import TagLayout from '../components/TagLayout'
import TagPre from '../components/TagPre'
import { TagHeaderWithMenuBtn } from '../components/TagHeader'
import { TagIonCardHeader } from '../components/TagIonCardHeader'
import { useAppContext } from '../context/TagMyAppContext'

const PageConfig = () => {
  const [darkMode, setDarkMode] = useDarkMode()
  const [tagAlert] = useIonAlert()
  const [tagToast] = useIonToast()
  const {
    URL_CONFIG: { title }
  } = PATHS
  const titleDarkMode = 'Activa o desactiva el Modo Oscuro'

  const handleDeleteInfoAll = () => {
    tagAlert({
      header: '¿Borrar todo?',
      message: '¡Puedes hacer una copia de seguridad antes de borrar todo!',
      buttons: [
        'Cancelar',
        {
          text: 'Borrar',
          handler: (d) => {
            window.localStorage.clear()
            tagToast({
              message: 'A sido eliminado con exito!',
              duration: 3000
            })
            setTimeout(() => {
              window.location.reload()
            }, 1000)
          }
        }
      ]
    })
  }

  return (
    <TagLayout>
      <TagHeaderWithMenuBtn title={title} />
      {/* Modo oscuro */}
      <IonCard>
        <TagIonCardHeader>{titleDarkMode}</TagIonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonLabel>Modo Oscuro:</IonLabel>
            <IonToggle
              color="success"
              checked={darkMode}
              onIonChange={({ detail: { checked } }) => {
                setDarkMode(checked)
              }}
            />
          </IonItem>
        </IonCardContent>
      </IonCard>
      {/*  */}
      <IonCard>
        <TagIonCardHeader>Borrar datos</TagIonCardHeader>
        <IonCardContent>
          <IonButton
            expand="block"
            fill="outline"
            color="danger"
            onClick={handleDeleteInfoAll}
          >
            <IonIcon slot="start" icon={trashSharp} />
            Eliminar
          </IonButton>
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardContent>
          <TagPre value={useAppContext().myApp.myAnimelist} />
        </IonCardContent>
      </IonCard>
    </TagLayout>
  )
}

export default PageConfig
