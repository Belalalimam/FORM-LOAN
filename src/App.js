import React from 'react'
import Navbar from './Navbar_New'
import Left from './Left'
import Post from './Post'

import './App.css'


const App = () => {
  return (
    <div>
      <Navbar />
      <div className='all_post'>
      <div className=''>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      </div>
      <Left />
      </div>


    </div>
  )
}

export default App
