import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Switch } from 'react-router-dom'
import AdminTemplate from './templates/AdminTemplate/AdminTemplate'
import { UserTemplate } from './templates/UserTemplate/UserTemplate'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

export const history = createBrowserHistory()
export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <AdminTemplate path='/admin' exact Component={''} />
        <UserTemplate path='/login' exact Component={Login} />
        <UserTemplate path='/register' exact Component={Register} />
        <UserTemplate path='/' exact Component={Login} />
      </Switch>
    </Router>
  )
}
