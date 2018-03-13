import {
  OPEN_LEFT,
  OPEN_RIGHT
} from '../constants';

// Значения по умолчанию
const _initialState = {
  showLeftBlock: false,
  showRightBlock: false,
};

export default (state = _initialState, { type, payload }) => {
  switch(type) {
    case OPEN_LEFT:
      return Object.assign({}, state, {
        showLeftBlock: payload
      });
    case OPEN_RIGHT:
      return Object.assign({}, state, {
        showRightBlock: payload
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