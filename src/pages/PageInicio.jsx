import {
  IonCol,
  IonGrid,
  IonRow,
  IonItem,
  IonButton,
  IonInput,
  IonSpinner,
  IonCard,
  IonCardContent
} from '@ionic/react'
import { TagHeaderWithMenuBtn } from '../components/TagHeader'
import TagLayout from '../components/TagLayout'
import { PATHS } from './TagAppPages'
import { useHookForm } from '../hooks/use-hook-form'
import { useState } from 'react'
import { getAnimeSearch } from '../services/getAnimeSearch'
import TagResultSearch from '../components/TagResultSearch'

const PageInicio = () => {
  const { register, handleSubmit, watch } = useHookForm({
    defaultValues: { q: 'bocchi' }
  })
  const [isSearch, setIsSearch] = useState(!1)
  const [info, setInfo] = useState([])
  const [query, setQuery] = useState(watch('q'))
  const formAnime = async (data) => {
    setIsSearch(!0)
    try {
      const res = await getAnimeSearch(data)
      console.log(res)
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
                      onIonChange={({ target: { value } }) => setQuery(value)}
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
            {!!query &&
              info.map((_, i) => <TagResultSearch key={i} data={_} />)}
          </IonCol>
        </IonRow>
      </IonGrid>
    </TagLayout>
  )
}

export default PageInicio
