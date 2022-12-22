import React from 'react'
import {createBrowserHistory} from 'history'
import {Router, Switch} from 'react-router-dom'
import AdminTemplate from './templates/AdminTemplate/AdminTemplate'

export const history = createBrowserHistory()
export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <AdminTemplate path='/admin' exact Component={''} />

      </Switch>
    </Router>
  )
}
