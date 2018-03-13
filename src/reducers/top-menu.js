import {
  SHOW_TOP_MENU,
  SCROLL_TOP_MENU,
  SHOW_WHITE_MENU
} from '../constants';

// Значения по умолчанию
const _initialState = {
  showMenu: false,
  scrollMenu: true,
};

export default (state = _initialState, { type, payload }) => {
  switch(type) {
    case SHOW_TOP_MENU:
      return Object.assign({}, state, {
        showMenu: !state.showMenu
      });
    case SCROLL_TOP_MENU:
      return Object.assign({}, state, {
        scrollMenu: payload
      });
    default:
      return state;
  }
}
