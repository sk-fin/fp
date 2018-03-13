import {
  SHOW_POPUP
} from '../constants';

// Значения по умолчанию
const _initialState = {
  showPopup: '',
};

export default (state = _initialState, { type, payload }) => {
  switch(type) {
    case SHOW_POPUP:
      return Object.assign({}, state, {
        showPopup: payload
      });
    default:
      return state;
  }
}



/*
 Стандартное написание функции:
 export default function peopleReducer(state = initialState, action) {
 Краткое написание функции:
 export default (state = initialState, { type, payload }) => {
 В кратком {type, payload} это готовые к использованию в функции свойства объекта action
 Если использовать action то доступ к данным в функции будет осуществлятся через action.type и action.payload
 */