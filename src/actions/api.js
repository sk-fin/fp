import {
  API_LOAD_UK_LIST,
  API_LOADING_UK_LIST,
  API_LOAD_COMPANY,
  API_LOADING_COMPANY,
  API_LOAD_PIF_LIST,
  API_LOAD_FUND_TYPES_LIST
} from '../constants';

export const loadUkLIst = (list) => ({
  type: API_LOAD_UK_LIST,
  payload: list
});
export const loadingUkLIst = (bool) => ({
  type: API_LOADING_UK_LIST,
  payload: bool
});


export const loadPif = (item) => ({
  type: API_LOAD_PIF_LIST,
  payload: item
});
export const loadFundTypes = (item) => ({
  type: API_LOAD_FUND_TYPES_LIST,
  payload: item
});


export const loadCompany = (item) => ({
  type: API_LOAD_COMPANY,
  payload: item
});
export const loadingCompany = (bool) => ({
  type: API_LOADING_COMPANY,
  payload: bool
});

