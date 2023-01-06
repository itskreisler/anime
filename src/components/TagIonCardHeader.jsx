import {
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle
} from '@ionic/react'
import Platform from 'react-platform-js'
export const TagIonCardHeader = ({ children }) => {
  const { OS } = Platform

  return <IonCardHeader>
    {OS === 'iOS'
      ? (
      <IonCardSubtitle>{children}</IonCardSubtitle>
        )
      : (
      <IonCardTitle>{children}</IonCardTitle>
        )}
  </IonCardHeader>
}
