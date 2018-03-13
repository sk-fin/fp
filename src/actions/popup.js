import {
  SHOW_POPUP
} from '../constants';

export const showPopup = (name) => ({
  type: SHOW_POPUP,
  payload: name
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