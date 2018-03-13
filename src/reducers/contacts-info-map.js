import {
  CHANGE_CITY_MAP
} from '../constants';

// Значения по умолчанию
const _initialState = {
  activeCity: 0,
};

export default (state = _initialState, { type, payload }) => {
  switch(type) {
    case CHANGE_CITY_MAP:
      return Object.assign({}, state, {
        activeCity: payload
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