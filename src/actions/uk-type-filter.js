import {
  UK_TYPE_FILTER,
  UK_TYPE_FILTER_LIST
} from '../constants';

export const setUkTypeFilter = (int) => ({
  type: UK_TYPE_FILTER,
  payload: int
});

export const addUkTypeFilterList = (arr) => ({
  type: UK_TYPE_FILTER_LIST,
  payload: arr
});

