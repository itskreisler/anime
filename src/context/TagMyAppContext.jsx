import PropTypes from 'prop-types'
import React, { useContext, createContext } from 'react'
import { useLocalStorage } from '../hooks/use-local-storage'

const MyApp = createContext({
  myApp: { myAnimelist: [], setMyAnimeList: () => {} }
})

const TagMyAppContext = ({ children }) => {
  const [myAnimelist, setMyAnimeList] = useLocalStorage('myApp:myAnimelist', [])
  return (

    <MyApp.Provider
      value={{
        myApp: { myAnimelist, setMyAnimeList }
      }}
    >
      {children}
    </MyApp.Provider>
  )
}
TagMyAppContext.propTypes = {
  children: PropTypes.node.isRequired
}
TagMyAppContext.defaultProps = {
  children: <></>
}
export const useAppContext = () => useContext(MyApp)
export default TagMyAppContext
