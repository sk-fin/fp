import {
  OPEN_LEFT,
  OPEN_RIGHT
} from '../constants';

// Значения по умолчанию
const _initialState = {
  settings: {
    dots: true,
    speed: 500,
    slidesToShow: 1,
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

