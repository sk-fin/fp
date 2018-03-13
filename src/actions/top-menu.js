import {
  SHOW_TOP_MENU,
  SCROLL_TOP_MENU,
  SHOW_WHITE_MENU
} from '../constants';

export const showTopMenu = () => ({
  type: SHOW_TOP_MENU
});

export const onScrollMenu = (bool) => ({
  type: SCROLL_TOP_MENU,
  payload: bool
});

export const onShowWhite = (bool) => ({
  type: SHOW_WHITE_MENU,
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