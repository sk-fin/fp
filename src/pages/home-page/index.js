import { connect } from 'react-redux';

import HomePage from './view';

import {
  onShowWhite,
  onScrollMenu
} from '../../actions/top-menu';

export function mapStateToProps(state) {
  return {
    whiteMenu: state.topMenu.whiteMenu,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onShowWhiteMenu: (bool) => dispatch(onShowWhite(bool)),
    onScrollMenu: (bool) => dispatch(onScrollMenu(bool)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);