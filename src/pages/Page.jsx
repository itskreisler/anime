import { useParams } from 'react-router'
import TagLayout from '../components/TagLayout'
import {
  IonCol,
  IonGrid,
  IonRow,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonText, IonChip, IonFab, IonNote,
  IonFabButton,
  IonIcon
} from '@ionic/react'
import { heartSharp } from 'ionicons/icons'
import { useLocalStorage } from '../hooks/use-local-storage'
import { TagHeaderWithBackBtn } from '../components/TagHeader'
import { useAppContext } from '../context/TagMyAppContext'
import { PATHS } from './TagAppPages'

const Page = () => {
  const { id } = useParams()
  const [info] = useLocalStorage('PageInicio:info', [])
  const data = info.find((_) => _.mal_id === parseInt(id))
  const { myApp: { setMyAnimeList } } = useAppContext()
  if (info.length === 0 || typeof data === 'undefined') {
    return (
      <TagLayout header={<TagHeaderWithBackBtn title='404' url={PATHS.URL_DEFAULT.path} />}>

      </TagLayout>
    )
  }

  const handleSaveAnime = () => {
    setMyAnimeList(_ => [..._, id])
  }
  return (
    <TagLayout header={<TagHeaderWithBackBtn title={data.title} url={PATHS.URL_DEFAULT.path} />}>
      <IonGrid>
        <IonRow className="justify-content-center">
          <IonCol sizeLg="12">
            <IonCard>
              <IonRow className="justify-content-center">
                <IonCol size="auto" sizeLg="4">
                  <img
                    alt="..."
                    className="cover-anime object-fit-cover d-flex mx-auto rounded"
                    src={data.images.webp.large_image_url}
                  />
                </IonCol>
                <IonCol size="12" sizeLg="8">

                  <IonText color={'dark'}>
                    <h5 style={{ marginLeft: '16px' }}>Nombre: {data.title}</h5>
                  </IonText>
                  <IonText color={'dark'} style={{ marginLeft: '16px' }}>
                    Genero:{' '}
                    {data.genres.map(({ name }, i) => (
                      <IonChip key={i} color="secondary">{name}</IonChip>
                    ))}
                  </IonText>

                </IonCol>
              </IonRow>

              <IonCardHeader>
                <IonCardTitle>Temporadas:</IonCardTitle>
                <IonCardSubtitle>Episodios: {data.episodes}</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>Año de emision: {!data.year ? 'No definido' : data.year}</IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol pushLg="4" size="12" sizeLg="8">
            <IonCard>
              <IonCardContent>
                <p style={{ textAlign: 'justify' }}>
                  <strong>Sinópsis:</strong> {data.synopsis}
                </p>
              </IonCardContent>
            </IonCard>
          </IonCol>
          <IonCol pullLg="8" size="12" sizeLg="4">
            <IonCard>
              <IonCardContent>
                <TagItemListLeft title='Format:' text={data.type} />
                <TagItemListLeft title='Episodes:' text={data.episodes} />
                <TagItemListLeft title='Episode Duration:' text={data.duration} />
                <TagItemListLeft title='Status:' text={data.status} />

                <IonText>

                  Start Date:
                  End Date:
                  Season:
                  Average Score:
                  Mean Score:
                  Popularity:
                  Favorites:
                  Studios:
                  Producers:
                  Source:
                  Hashtag:
                  Genres:
                  Romaji:
                  English:
                  Native:
                  Synonyms:
                </IonText>
              </IonCardContent>
            </IonCard>
            <IonCard>
              <IonCardContent>Animación</IonCardContent>
            </IonCard>
            <IonCard>
              <IonCardContent>Historia</IonCardContent>
            </IonCard>
            <IonCard>
              <IonCardContent>Personajes</IonCardContent>
            </IonCard>
            <IonCard>
              <IonCardContent>Música</IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton
          onClick={handleSaveAnime}
          color={'dark'}
          size="small"
        >
          <IonIcon icon={heartSharp} size="large" color='danger' />
        </IonFabButton>
      </IonFab>
    </TagLayout>
  )
}
const TagItemListLeft = ({ title = 'placeholder', text = 'placeholder' }) => {
  return (
    <div style={{ paddingBottom: '14px' }}>
      <div>
        <IonText color={'dark'}>
          {title}
        </IonText>
      </div>
      <div>
        <IonNote>{text}</IonNote>
      </div>
    </div>
  )
}

export default Page
