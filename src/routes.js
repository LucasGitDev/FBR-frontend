import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Peca from './pages/Peca'

import App from './App'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={App}/>
      {/* <Route path="/dev/:id" exact component={Main}/> */}
    </BrowserRouter>
  )
}