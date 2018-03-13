import {
  API_LOAD_UK_LIST,
  API_LOADING_UK_LIST,
  API_LOAD_COMPANY,
  API_LOADING_COMPANY,
  API_LOAD_PIF_LIST,
  API_LOAD_FUND_TYPES_LIST,
} from '../constants';

// Значения по умолчанию
const _initialState = {
  companyList: [],
  ukList: [],
  pifList: [],
  fundTypes: {},
  loadingUkList: false,
  loadingCompany: false,
};

export default (state = _initialState, { type, payload }) => {
  switch(type) {

    case API_LOAD_UK_LIST:
      return Object.assign({}, state, {
        ukList: payload,
        loadingUkList: false
      });
    case API_LOADING_UK_LIST:
      return Object.assign({}, state, {
        loadingUkList: payload,
      });


    case API_LOAD_COMPANY:
      return Object.assign({}, state, {
        companyList: [...state.companyList, payload],
        loadingCompany: false
      });
    case API_LOADING_COMPANY:
      return Object.assign({}, state, {
        loadingCompany: payload,
      });

    case API_LOAD_PIF_LIST:
      return Object.assign({}, state, {
        pifList: [...state.pifList, payload]
      });
    case API_LOAD_FUND_TYPES_LIST:
      return Object.assign({}, state, {
        fundTypes: payload
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