import {
  IonCol,
  IonGrid,
  IonRow,
  IonItem,
  IonButton,
  IonInput,
  IonSpinner,
  IonCard,
  IonCardContent,
  IonText
} from '@ionic/react'
import { TagHeaderWithMenuBtn } from '../components/TagHeader'
import TagLayout from '../components/TagLayout'
import { PATHS } from './TagAppPages'
import { useHookForm } from '../hooks/use-hook-form'
import { useState } from 'react'
import { getAnimeSearch } from '../services/getAnimeSearch'
import TagResultSearch from '../components/TagResultSearch'
import { useLocalStorage } from '../hooks/use-local-storage'

const PageInicio = () => {
  const { register, handleSubmit, watch } = useHookForm()
  const [isSearch, setIsSearch] = useState(!1)
  const [info, setInfo] = useLocalStorage('PageInicio:info', [])
  const [notFound, setNotFound] = useState(false)
  const [query, setQuery] = useState('')
  const formAnime = async (data) => {
    setIsSearch(!0)
    try {
      const res = await getAnimeSearch(data)
      // console.log(res)
      setNotFound(!res.data.length)
      setInfo(res.data)
    } catch (error) {
    } finally {
      setIsSearch(!1)
    }
  }

  return (
    <TagLayout>
      <TagHeaderWithMenuBtn title={PATHS.URL_DEFAULT.title} />

      <IonGrid>
        <IonRow className="justify-content-center">
          <IonCol size="12" sizeMd="6" sizeLg="8">
            <IonCard>
              <IonCardContent>
                <form onSubmit={handleSubmit(formAnime)}>
                  <IonItem>
                    <IonButton
                      type="submit"
                      slot="end"
                      fill="outline"
                      color={'success'}
                    >
                      {isSearch && <IonSpinner name="dots" color="dark" />}🔎
                    </IonButton>
                    <IonInput
                      placeholder="✨..."
                      autocomplete="off"
                      disabled={isSearch}
                      required={!0}
                      {...register('q', { required: true })}
                      onIonChange={({ target: { value } }) => { setQuery(value); setInfo([]) }}
                      clearInput
                    ></IonInput>
                  </IonItem>
                </form>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow>
          <IonCol>
            {notFound && <IonCard>
              <IonCardContent>
<IonText color={'dark'}>Upss.. no pude encontrar lo que buscas, intenta agregarlo manualmente.</IonText>
              </IonCardContent>
              </IonCard>}
            {!notFound &&
              info.map((_, i) => <TagResultSearch key={i} data={_} />)}
          </IonCol>
        </IonRow>
      </IonGrid>
    </TagLayout>
  )
}

export default PageInicio
