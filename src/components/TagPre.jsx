import React from 'react'

const TagPre = ({ value = Object, replecer = null, space = 2 }) => {
  return (
    <pre>{JSON.stringify(value, replecer, space)}</pre>
  )
}

export default TagPre
