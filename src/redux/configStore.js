import { applyMiddleware, combineReducers, createStore } from 'redux'

import thunk from 'redux-thunk'
import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer'

import { MenuAdminReducer } from './reducers/MenuAdminReducer'

const rootReducer = combineReducers({
    MenuAdminReducer,
    QuanLyNguoiDungReducer: QuanLyNguoiDungReducer,
    
})

export const store = createStore(rootReducer, applyMiddleware(thunk))