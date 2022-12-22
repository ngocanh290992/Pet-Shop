import React, {Fragment, useState} from 'react'
import {useSelector} from 'react-redux'
import { Route } from "react-router"
import HeaderAdminTemplate from './HeaderAdminTemplate'


export default function AdminTemplate(props) {
    const { Component, ...restProps } = props
    const {btnMenu, openMenu} = useSelector(state => state.MenuAdminReducer)

  return <Route {...restProps} render={(propsRoute) => {
    return <Fragment>
            <HeaderAdminTemplate/>

            <main className='main' id='main'>
              <div className={`menu ${openMenu}`}>
                  Menu
              </div>
              <div className='content'>
                Content
              </div>
            </main> 
    </Fragment>
  }} />
}
