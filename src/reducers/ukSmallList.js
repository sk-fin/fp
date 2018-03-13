import {
  SHOW_UK_SMALL_LIST,
  SHOW_UK_SMALL_LIST_MOBILE
} from '../constants';

// Значения по умолчанию
const _initialState = {
  showUkLIst: false,
  showUkLIstMobile: false
};

export default (state = _initialState, { type, payload }) => {
  switch(type) {

    case SHOW_UK_SMALL_LIST:
      return Object.assign({}, state, {
        showUkLIst: !state.showUkLIst,
      });
    case SHOW_UK_SMALL_LIST_MOBILE:
      return Object.assign({}, state, {
        showUkLIstMobile: !state.showUkLIstMobile,
      });

    default:
      return state;
  }
}
