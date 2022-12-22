import {applyMiddleware, combineReducers, createStore} from 'redux'

import thunk from 'redux-thunk'
import { MenuAdminReducer } from './reducers/MenuAdminReducer'

const rootReducer = combineReducers({
    MenuAdminReducer,
    
})

export const store = createStore(rootReducer, applyMiddleware(thunk))