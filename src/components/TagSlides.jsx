import React, { useCallback } from 'react'
import {
  IonText,
  IonCard,
  IonCardContent, IonSlides,
  IonSlide
} from '@ionic/react'
import { hookDays } from '../hooks/use-helpers'
const TagSlides = ({ changeDay }) => {
  const Tag = useCallback(() => {
    return (
        <IonSlides
                pager={true}
                options={{
                  initialSlide: changeDay,
                  speed: 1000
                }}
            >
                {hookDays.map(({ name: { long: { es } }, isToday }, i) => (
                    <IonSlide key={i} style={{ height: '509.609px' }}>
                        <IonCard>
                            <IonCardContent>
                                <IonText>
                                    {isToday && (
                                        <>
                                            <strong>Today</strong>
                                            <br />
                                        </>
                                    )}

                                    {es}
                                </IonText>
                            </IonCardContent>
                        </IonCard>
                    </IonSlide>
                ))}
            </IonSlides>
    )
  }, [changeDay])
  return (
        <React.Fragment>
<Tag/>
        </React.Fragment>
  )
}

export default TagSlides
