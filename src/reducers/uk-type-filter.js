import {
  UK_TYPE_FILTER,
  UK_TYPE_FILTER_LIST
} from '../constants';

// Значения по умолчанию
const _initialState = {
  loaded: false,
  list: [],
  type: 0,
};

export default (state = _initialState, { type, payload }) => {
  switch(type) {

    case UK_TYPE_FILTER:
      return Object.assign({}, state, {
        type: payload
      });
    case UK_TYPE_FILTER_LIST:
      return Object.assign({}, state, {
        list: payload,
        loaded: true
      });

    default:
      return state;
  }
}
