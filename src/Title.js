import React from 'react'

const Title = ({name, children}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h5>{children}</h5>
    </div>
  )
}

export default Title
