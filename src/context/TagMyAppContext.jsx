import PropTypes from 'prop-types'
import React, { useContext, createContext } from 'react'

const MyApp = createContext({
  myApp: {
    name: 'kreisler'
  }
})

const TagMyAppContext = ({ children }) => {
  return (

    <MyApp.Provider
      value={{
        myApp: { name: 'kreisler' }
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
export const useAboutMeContext = () => useContext(MyApp)
export default TagMyAppContext
