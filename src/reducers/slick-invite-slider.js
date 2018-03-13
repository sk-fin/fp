import {
  OPEN_LEFT,
  OPEN_RIGHT
} from '../constants';

// Значения по умолчанию
const _initialState = {
  settings: {
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
    className: 'lightslider',
  },
};

export default (state = _initialState, { type, payload }) => {
  switch(type) {
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