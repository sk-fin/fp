import { combineReducers } from 'redux';

import homeHeaderSlider from './home-header-slider';
import slickInviteSlider from './slick-invite-slider';
import slickAboutSlider from './slick-about-slider';
import contactsInfoMap from './contacts-info-map';
import popup from './popup';
import topMenu from './top-menu';
import api from './api';
import ukSmallList from './ukSmallList';
import accordion from './accordion';
import ukTypeFilter from './uk-type-filter';

export default combineReducers({
  homeHeaderSlider,
  slickInviteSlider,
  slickAboutSlider,
  contactsInfoMap,
  popup,
  topMenu,
  api,
  ukSmallList,
  accordion,
  ukTypeFilter
});
