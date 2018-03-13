import {
  CHANGE_CITY_MAP
} from '../constants';

export const changeCity = (num) => ({
  type: CHANGE_CITY_MAP,
  payload: num
});

/*
 Стандартная форма:
 export function incrementCounter(num) {
 return {
 type: INCREMENT_ITEM,
 payload: num
 };
 }
 Более читабельная форма написания экшнов:
 export const incrementCounter = (num) => ({
 type: INCREMENT_ITEM,
 payload: num
 });
 По смыслу одинаковые.
 */