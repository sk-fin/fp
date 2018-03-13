import {
  SHOW_ACCORDION
} from '../constants';

// Значения по умолчанию
const _initialState = {
  accordion: '',
};

export default (state = _initialState, { type, payload }) => {
  switch(type) {

    case SHOW_ACCORDION:
      return Object.assign({}, state, {
        accordion: state.accordion == payload ? '' : payload
      });

    default:
      return state;
  }
}
