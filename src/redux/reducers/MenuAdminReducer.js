import { SHOW_MENU_ADMIN } from "../types/MenuAdminType"

const initialState = {
    btnMenu: false,
    openMenu: ''
}

export const MenuAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MENU_ADMIN: {
      state.btnMenu = !state.btnMenu
      if(state.btnMenu){
        state.openMenu = 'show-menuAdmin'
      }else{
        state.openMenu = ''
      }

      return {...state}
    }
  
  default:
    return state
  }
}
