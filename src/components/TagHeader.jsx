import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonMenuButton,
  IonBackButton,
  IonIcon,
  IonText,
  IonItem
} from '@ionic/react'
import Platform from 'react-platform-js'

export const TagHeaderWithMenuBtn = ({ title = 'placeholder' }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle size="large">{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}
export const TagHeaderWithBackBtn = ({ title = 'placeholder', url }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref={url} />
        </IonButtons>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}
export const TagHeaderWithoutBtn = ({ title = 'placeholder' }) => {
  return (
    <IonHeader collapse={'' /* condense */}>
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}
export const TagHeaderWithBackAndAnotherBtn = ({
  title = 'placeholder',
  url = '',
  handleCLick,
  color,
  icon = { ios: '', md: '' }
}) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonItem lines="none">
          <IonButtons slot="start">
            <IonBackButton defaultHref={url} />
          </IonButtons>
          {Platform.OS === 'iOS'
            ? (
            <IonText>{title}</IonText>
              )
            : (
            <IonTitle>{title}</IonTitle>
              )}
          <IonItem
            slot={'end'}
            style={{ cursor: 'pointer' }}
            onClick={handleCLick}
            lines="none"
            detail={false}
          >
            <IonIcon
              color={color}
              slot="end"
              size="large"
              ios={icon.ios}
              md={icon.md}
            />
          </IonItem>
        </IonItem>
      </IonToolbar>
    </IonHeader>
  )
}
