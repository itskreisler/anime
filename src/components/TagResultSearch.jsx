/* eslint-disable camelcase */
import {
  IonItem,
  IonCard,
  IonCardContent,
  IonLabel,
  IonThumbnail,
  IonImg
} from '@ionic/react'
const TagResultSearch = ({ data: { mal_id, title, synopsis, images: { webp } } }) => {
  return (
    <IonCard>
    <IonCardContent>
      <IonItem button detail={!0} routerLink={`/anime-search/${mal_id}`}>
        <IonThumbnail slot="start">
          <IonImg {...{ title }} src={webp.small_image_url}></IonImg>
        </IonThumbnail>
        <IonLabel>
          <h3>{title}</h3>
          <p>{synopsis}</p>
        </IonLabel>
      </IonItem>
    </IonCardContent>
  </IonCard>
  )
}

export default TagResultSearch
