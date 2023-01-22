import React, { useState, useEffect } from 'react'
import './tagspinner.scss'
const TagSpinner = () => {
  const [meStyles, setMeStyles] = useState({})
  const toggleSpinner = () => {
    setMeStyles({ opacity: 0, display: 'none' })
  }
  useEffect(() => {
    /* const spinner = setTimeout(() => {
      setMeStyles({ opacity: 0, display: 'none' })
      clearInterval(spinner)
    }, 2000) */
  }, [])
  return (
    <div className="preloader-page" style={{ ...meStyles }}>
      <div className="justify-content-center d-flex align-items-center vh-100" style={{
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        height: '100vh'
      }}>
        <div className="preloader-close" onClick={toggleSpinner}>
          ×
        </div>
        <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
      </div>
    </div>
  )
}

export default TagSpinner
