import React from 'react'
import {Route} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1> Home page</h1>
      <Route path='/home/username'>
        <p>Welcome username!</p>
      </Route>
    </div>
  )
}

export default Home
