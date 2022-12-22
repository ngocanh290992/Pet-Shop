import React, {Fragment} from 'react'
import { Route } from "react-router"
import HeaderAdminTemplate from './HeaderAdminTemplate'


export default function AdminTemplate(props) {
    const { Component, ...restProps } = props

  return <Route {...restProps} render={(propsRoute) => {
    return <Fragment>
            <HeaderAdminTemplate/>

            <main className='main' id='main'>
              <div className='menu'>
                  Menu
              </div>
              <div className='content'>
                Content
              </div>
            </main> 
    </Fragment>
  }} />
}
