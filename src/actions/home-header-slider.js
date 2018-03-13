import {
  OPEN_LEFT,
  OPEN_RIGHT
} from '../constants';

export const openLeft = (bool) => ({
  type: OPEN_LEFT,
  payload: bool
});
export const openRight = (bool) => ({
  type: OPEN_RIGHT,
  payload: bool
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