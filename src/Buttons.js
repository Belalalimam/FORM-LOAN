import React from 'react'

const Buttons = ({children}) => {
  return (
    <div className='all_btn'>
      <button className='btn'>{children}</button>
    </div>
  )
}

export default Buttons
