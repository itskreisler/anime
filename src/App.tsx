import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact
} from '@ionic/react'
import { IonReactHashRouter as IonRouter } from '@ionic/react-router'

import Menu from './components/Menu'
import TagAppPages from './pages/TagAppPages'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.scss'
import TagMyAppContext from './context/TagMyAppContext'

setupIonicReact()

const App: React.FC = () => {
  return (
    <IonApp>
      <IonRouter>
        <IonSplitPane contentId="main">
          <TagMyAppContext>
          <Menu />
          <IonRouterOutlet id="main">
            <TagAppPages />
          </IonRouterOutlet>
          </TagMyAppContext>
        </IonSplitPane>
      </IonRouter>
    </IonApp>
  )
}

export default App
